import { TLayoutType } from '@/app/types/layout/LayoutProps'
import React from 'react'


const MainLayout = ({children}:TLayoutType) => {
  return (
    <main className=' min-h-screen flex flex-col justify-center items-center w-screen bg-gradient-to-b from-primary-800 to-primary-400'>
      {children}
    </main>
  )
}

export default MainLayout
