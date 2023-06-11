import React from "react"
import Header from "./components/globals/Header"
import HomePage from "./components/pages/HomePage"
import ContactPage from "./components/pages/ContactPage"
import Footer from "./components/globals/Footer"




function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App
