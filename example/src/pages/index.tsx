"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SFACPlayer } from '../../../dist'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <SFACPlayer src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"}/>
    </>
  )
}
