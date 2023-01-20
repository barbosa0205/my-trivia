import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  children: React.ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <div className='h-screen container max-w-7xl mx-auto bg-white'>
      <Header />
      <main className='container mx-auto h-full'>{props.children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
