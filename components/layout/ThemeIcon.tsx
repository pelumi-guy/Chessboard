import React from 'react';
import Image from 'next/image';
import { lightMode, darkMode } from '@/exports';
// import { Theme } from '@/types/common';


interface ThemeIconProps {
  theme: string;
}

const ThemeIcon = ({ theme }: ThemeIconProps) => {
  return (theme === "light" ?
    (
      <Image src={darkMode} alt="dark mode" className='theme-icon'/>
    ) :
    (
        <Image src={lightMode} alt="light mode" className='theme-icon'/>
    )
  )
}

export default ThemeIcon