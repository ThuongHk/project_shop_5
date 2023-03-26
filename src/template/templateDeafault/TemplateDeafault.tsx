import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

type Props = {}

function TemplateDeafault({children}: any) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default TemplateDeafault