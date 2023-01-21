import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  children: React.ReactNode
  [x: string]: any
}

const MainLayout = ({ children, ...rest }: Props) => {
  return (
    <div className='h-screen container max-w-7xl mx-auto bg-white'>
      <Header />
      <main className='container mx-auto h-full' {...rest}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
