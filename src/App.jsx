
import { useState } from 'react'
import './App.css'
import UserTable from './tables/UseraTable'

function App() {
const userData=[{
  id:1,name:"vis",username:"vishhgffbv"},{
    id:2,name:"vis",username:"vishhgffbv"},{
      id:3,name:"vis",username:"vishhgffbv"},]
      const [users,setUsers]=useState(userData)
  return (
   <div className="container">
    <h1>crude app with hooks</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        <h2>view user</h2>
        </div>
        <div className='flex-large'>
        <h2>vivw user</h2>
        <UserTable users={users}/>
        </div>
      </div>
    </div>

  
  )
}

export default App
