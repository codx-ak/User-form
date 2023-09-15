import React from 'react'
import PageRoute from './routes/PageRoute'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import Store from './config/StoreConfig'

const App = () => {
  return (
    //config the User Store
    <Provider store={Store}>
    <NavBar/>

    {/* Route Pages */}
    <PageRoute/>
    
    <Footer/>
    </Provider>
  )
}

export default App
