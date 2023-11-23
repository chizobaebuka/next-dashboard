"use client";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src={'/envelope.svg'} height={36} width={36} alt="next image"/>
    </div>
  )
}
