import React from 'react'
import PageRoute from './routes/PageRoute'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import Store from './config/StoreConfig'

const App = () => {
  return (
    <Provider store={Store}>
    <NavBar/>
    <PageRoute/>
    <Footer/>
    </Provider>
  )
}

export default App
