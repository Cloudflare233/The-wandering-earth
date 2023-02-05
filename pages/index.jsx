import { useState } from 'react'
import Head from 'next/head';
import { MakeDomImage } from 'react-make-dom-image';
import { useRef } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  const [event, setEvent] = useState('开学');
  const [time, setTime] = useState('2');
  const [unit, setUnit] = useState('天');
  const [english, setEnglish] = useState('There are still two days before school starts');
  const [bg, setBg] = useState('false')
  const domRef = useRef();
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-0 py-24">
      <Head>
        <title>流浪地球2：倒计时在线生成器</title>
      </Head>
      <div className='flex flex-row justify-between text-sm opacity-75 mb-4'>
        <h1>流浪地球2：倒计时在线生成器</h1>
        <div className='flex flex-row space-x-2'>
          <p className='inter font-medium'>V0.2 Alpha</p>
          <button onClick={() => open('https://github.com/Cloudflare233/The-wandering-earth')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </button>
        </div>
      </div>

      <hr />

      <div className='my-6 grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='node-content w-full col-span-2 overflow-x-auto bg-black text-white rounded-3xl min-h-[16rem] sm:min-h-[24rem] px-8 sm:px-36 py-24'>
          <div ref={domRef} id="node" className={cn(bg === 'false' ? '' : 'bg-black')}>
            <h2 className='text-4xl mb-3 word'>距离{event}</h2>
            <div className='grid grid-cols-3 grid-rows-2'>
              <div className='row-span-2 col-span-1 ml-12 word h-auto bg-red-600 w-1.5' />
              <div className='col-span-2 -ml-4 sm:-ml-7'>
                <div className='flex flex-row word flex-nowrap'>
                  <h2 className='text-4xl'>还有</h2>
                  <h2 className='text-6xl text-red-600 -mt-3 font-bold ml-1 mr-1 inter'>{time}</h2>
                  <h2 className='text-4xl'>{unit}</h2>
                </div>
              </div>
              <div className='col-span-2 -ml-4 sm:-ml-7'>
                <div className='row-span-1 inter mt-0.5 opacity-75 w-56'>
                  {english}
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className='flex flex-col space-y-3 px-0 sm:px-1'>
          <div className='flex flex-row justify-between'>
            <h2 className='opacity-75 text-sm'>在这里补充需要的信息</h2>
            <button onClick={()=>{setEvent('');setTime('');setUnit('');setEnglish('')}} className='flex flex-row space-x-1 text-sm opacity-50'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              <span>清空</span>
            </button>
          </div>

          <div className='flex flex-col space-y-2 opacity-90'>
            <input onChange={(e) => setEvent(e.target.value)} value={event} className='w-full rounded-lg px-4 py-2 bg-zinc-100 border border-zinc-200' placeholder='事件' />
            <input onChange={(e) => setTime(e.target.value)} value={time} className='inter w-full rounded-lg px-4 py-2 bg-zinc-100 border border-zinc-200' placeholder='时间（数字）' />
            <input onChange={(e) => setUnit(e.target.value)} value={unit} className='w-full rounded-lg px-4 py-2 bg-zinc-100 border border-zinc-200' placeholder='单位' />
            <input onChange={(e) => setEnglish(e.target.value)} value={english} className='inter w-full rounded-lg px-4 py-2 bg-zinc-100 border border-zinc-200' placeholder='英文（1）' />

            <MakeDomImage
              domRef={domRef}
              exportName="流浪地球2倒计时导出"
              trigger={
                <button className="w-full bg-black rounded-lg px-8 py-2 text-white" type="button">
                  导出图片(2)
                </button>
              }
            />

          </div>

          <div className='flex flex-row space-x-1'>
            <input onClick={() => setBg(bg === 'false' ? 'true' : 'false')} type="checkbox" id="check" className='opacity-100' />
            <p className='text-sm opacity-50'>带有黑色背景的导出（否则透明）</p>
          </div>

          <hr />

          <p className='mt-6 text-sm opacity-50'>1.英文翻译可以从百度翻译等网站获取</p>
          <p className='mt-2 text-sm opacity-50'>2.导出时间较长，请耐心等待。具体导出时间取决于设备配置。</p>
        </div>
      </div>

      <hr />

      <div className='text-sm my-6 opacity-60'>
        <p>这是一个开源项目，由<a className="underline" href="https://cf233.ga">耿越</a> 自豪地使用Next.JS和TailwindCSS创建。</p>
        <p className='mt-2 inter'>©版权所有 2023. 保留所有权利.</p>

      </div>
    </div>
  )
}
