import { TLayoutType } from '@/app/types/layout/LayoutProps'
import React from 'react'


const MainLayout = ({children}:TLayoutType) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center  bg-gradient-to-b from-primary-800 to-primary-400'>
      {children}
    </main>
  )
}

export default MainLayout
