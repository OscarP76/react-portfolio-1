import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

function NavContainer() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Home') {
      return (<Home />)
    }
    if (currentPage === 'About') {
      return (<About />)
    }
    if (currentPage === 'Project') {
      return (<Project />)
    }
    return (<Contact />)
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default NavContainer