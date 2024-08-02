"use client"
import { ScrollTriggerProvider } from '@/components/scrollTrigger'
import { Screen } from '@/components/screen';
import './style.css';
import { animePropsCard } from '@/animation';
import {motion} from 'framer-motion'
import { useEffect } from 'react';
import { getPost } from './server/get-date';



const SHOW_MARKERS = false;

export default function App() {

useEffect(() => {
   getBeta()
}, [])
  async function getBeta(){
    const  respomse = await getPost()
    console.log(respomse)
  }
  return (
    <div className="App">
      <ScrollTriggerProvider debug={SHOW_MARKERS}>
        <Screen
          title="⏬ Mbora Começar a experiencia ⏬"
          colorStart="#333399"
          colorEnd="#663399"
          fadeIn={false}
        />
      </ScrollTriggerProvider>
      <ScrollTriggerProvider debug={SHOW_MARKERS} options={{ end: '+=300%' }}>
        <Screen
          title="Testando o time do Scroll ⏳"
          colorStart="#663399"
          colorEnd="#333399"
        >
        <motion.div 
        {...animePropsCard}
         transition={{duration: 1}}
        className='w-[400px] h-[200px] bg-cyan-500 rounded-lg mt-3 flex justify-center items-center'>
      <h1 className='text-[35px] text-slate-100'>Lorrys Code</h1>
        </motion.div>
        </Screen>
      </ScrollTriggerProvider>
      <ScrollTriggerProvider debug={SHOW_MARKERS}>
        <Screen
          title="Scroll based animations 🤯"
          colorStart="#333399"
          colorEnd="#663399"
          fadeOut={false}
        />
      </ScrollTriggerProvider>
    </div>
  );
}
