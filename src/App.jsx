import React, { useState } from 'react'
const App = () => {
  const [userDetail,setuserDeatil] = useState([
    {name:"sandip", mob_No:8102466216, isCompleted:false, gender:"male", city:"Delhi"},
  ])
  const [name,setname] = useState("")
  const[number,setNumber] = useState("")
  const [Completed, setCompleted] = useState(false);
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("delhi");
  
  const submitHandler = () => {
    e.preventDefault();
  }

  return (
    <div>
      <h3>Register user</h3>
      <form onSubmit={submitHandler}>

        <input 
        onChange={(e) =>setname(e.target.value)}
        value={name}
        type='text' 
        placeholder='Enter your Name : '/>
        <br/><br/>

        <input 
        onChange={(e) =>setNumber(e.target.value)}
        value={number}
        type='number' 
        placeholder='Mobile Number : '/>
        <br/><br/>

        <select 
        value={city}
        onChange={(e)=>setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="kolakata">Kolakata</option>
          <option value="mumnbai">Mumnbai</option>
          <option value="jharkhand">Jharkhand</option>
          <option value="karnataka">Karnataka</option>
          <option value="chennai">Chennai</option>
          <option value="gujrat">Gujrat</option>
          <option value="punjab">Punjab</option>
          <option value="UttarPradesh">UttarPradesh</option>
          <option value="oddisha">Oddisha</option>
        </select>
        <br/><br/>

        <input 
        value="male"
        onChange={(e)=>setgender(e.target.value)}
        checked={gender =="male" && true}
        type='radio'/>male
        <input 
        value="female"
        onChange={(e)=>setgender(e.target.value)}
        checked={gender =="female" && true}
        type='radio'/>female
        <br/><br/>

        <input 
        checked={Completed}
        onChange={(e) =>setCompleted(e.target.checked)}
        type='checkbox'/>Completed 
      </form>
    </div>
  )
}

export default App