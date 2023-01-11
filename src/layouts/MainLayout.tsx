import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  children: React.ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <>
      <Header />
      <main className='container h-screen'>{props.children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
