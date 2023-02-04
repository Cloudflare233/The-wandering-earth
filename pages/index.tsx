import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head';

const Home: NextPage = () => {
  const [event, setEvent] = useState('开学');
  const [time, setTime] = useState('2');
  const [unit, setUnit] = useState('天');
  const [english, setEnglish] = useState('There are still two days before school starts');
  return (
    <div className="max-w-3xl mx-auto px-6 py-40">
      <Head>
        <title>流浪地球2：倒计时在线编辑生成器</title>
      </Head>
      <h1>流浪地球2：倒计时在线编辑生成器</h1>

      <div className='my-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='bg-black text-white w-full rounded-3xl min-h-[24rem] px-8 py-24'>
          <h2 className='text-4xl mb-3'>距离{event}</h2>
          <div className='flex flex-row'>
            <div className='ml-14 h-28 bg-red-600 w-1.5' />
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <h2 className='ml-3 text-4xl'>还有</h2>
                <h2 className='text-6xl text-red-600 -mt-3 font-bold ml-1 mr-1 inter'>{time}</h2>
                <h2 className='text-4xl'>{unit}</h2>
              </div>
              <div className='inter ml-3 mt-2 opacity-75'>
                {english}
              </div>
            </div>
          </div>

        </div>
        <div className='flex flex-col space-y-3 px-4'>
          <h2 className='opacity-75'>在这里补充需要的信息</h2>

          <input onChange={(e) => setEvent(e.target.value)} value={event} className='w-full rounded-lg px-4 py-2 bg-zinc-200' placeholder='事件' />
          <input onChange={(e) => setTime(e.target.value)} value={time} className='w-full rounded-lg px-4 py-2 bg-zinc-200' placeholder='时间（数字）' />
          <input onChange={(e) => setUnit(e.target.value)} value={unit} className='w-full rounded-lg px-4 py-2 bg-zinc-200' placeholder='单位' />
          <input onChange={(e) => setEnglish(e.target.value)} value={english} className='inter w-full rounded-lg px-4 py-2 bg-zinc-200' placeholder='英文（1）' />

          <p className='mt-6 text-sm opacity-50'>1.英文翻译可以从百度翻译等网站获取</p>
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

export default Home
