import { useState } from 'react'
import './App.css'
import AdminPanel from './components/AdminPanel'
import TabBar from './components/TabBar'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Admin Panel</h1>
      </header>
      <TabBar />
      <main className="app-main">
        <AdminPanel />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Admin Panel. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
