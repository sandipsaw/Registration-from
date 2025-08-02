import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  const [userDetail,setuserDetail] = useState([
    {name:"sandip", mob_No:8102466216, isCompleted:false, gender:"male", city:"Delhi"},
  ])
  return (
    <div>
      <Create userDetail={userDetail} setuserDetail={setuserDetail}/>
      <Read userDetail={userDetail} setuserDetail={setuserDetail}/>
    </div>
  )
}

export default App