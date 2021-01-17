import React from 'react'
import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Sidebar from './components/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets'
import { useStateValue } from './StateProvider'

function App() {
    const [{user}] = useStateValue();

    return (
        <div className='app'>
            {user ? (
                <>
                    <Header />
                    <div className='app__body'>
                        <Sidebar />
                        <Feed />
                        <Widgets />
                    </div>
                </>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default App
