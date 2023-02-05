import { useState } from 'react'
import Head from 'next/head';
import { MakeDomImage } from 'react-make-dom-image';
import { useRef } from 'react';

export default function Home() {
  const [event, setEvent] = useState('开学');
  const [time, setTime] = useState('2');
  const [unit, setUnit] = useState('天');
  const [english, setEnglish] = useState('There are still two days before school starts');
  const domRef = useRef();
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-0 py-40">
      <Head>
        <title>流浪地球2：倒计时在线生成器</title>
      </Head>
      <div className='flex flex-row justify-between opacity-75'>
        <h1>流浪地球2：倒计时在线生成器</h1>
        <p className='inter font-medium'>V0.1 Alpha</p>
      </div>

      <div className='my-6 grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='node-content w-full col-span-2 overflow-x-auto bg-black text-white rounded-3xl min-h-[16rem] sm:min-h-[24rem] px-8 sm:px-36 py-24'>
          <div ref={domRef}>
            <h2 className='text-4xl mb-3'>距离{event}</h2>
            <div className='grid grid-cols-3 grid-rows-2'>
              <div className='row-span-2 col-span-1 ml-12 word h-28 bg-red-600 w-1.5' />
              <div className='col-span-2 -ml-4 sm:-ml-7'>
                <div className='flex flex-row'>
                  <h2 className='text-4xl word'>还有</h2>
                  <h2 className='text-6xl text-red-600 -mt-3 font-bold ml-1 mr-1 inter'>{time}</h2>
                  <h2 className='text-4xl word'>{unit}</h2>
                </div>
                <div className='row-span-1 inter mt-2 opacity-75 w-56'>
                  {english}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='flex flex-col space-y-4 px-0 sm:px-1'>
          <h2 className='opacity-75'>在这里补充需要的信息</h2>

          <input onChange={(e) => setEvent(e.target.value)} value={event} className='w-full rounded-lg px-4 py-2 bg-zinc-200' placeholder='事件' />
          <input onChange={(e) => setTime(e.target.value)} value={time} className='inter w-full rounded-lg px-4 py-2 bg-zinc-200' placeholder='时间（数字）' />
          <input onChange={(e) => setUnit(e.target.value)} value={unit} className='w-full rounded-lg px-4 py-2 bg-zinc-200' placeholder='单位' />
          <input onChange={(e) => setEnglish(e.target.value)} value={english} className='inter w-full rounded-lg px-4 py-2 bg-zinc-200' placeholder='英文（1）' />

          <MakeDomImage
            domRef={domRef}
            exportName="流浪地球2倒计时导出"
            trigger={
              <button className="w-full bg-black rounded-lg px-8 py-2 text-white" type="button">
                导出图片(2)
              </button>
            }
          />

          <p className='mt-6 text-sm opacity-50'>1.英文翻译可以从百度翻译等网站获取</p>
          <p className='mt-2 text-sm opacity-50'>2.导出时间较长，请耐心等待。具体导出时间取决于设备配置。</p>
        </div>
      </div>

      <hr />

      <div className='my-4 opacity-60'>
        <p>这是一个开源项目，由<a className="underline" href="https://cf233.ga">耿越</a> 自豪地使用Next.JS和TailwindCSS创建。</p>
        <p className='mt-2 inter'>©版权所有 2023</p>

      </div>
    </div>
  )
}
