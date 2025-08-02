import React from 'react'

const Read = (props) => {
    let userDetail = props.userDetail
    let setuserDeatil = props.setuserDetail
    const renderuser = userDetail.map((profile,index)=>{
    return(
      <li key={index}>
        <h4>Name : {profile.name}</h4>
        <h4>mob_no : {profile.mob_No}</h4>
        <h4>gender : {profile.gender}</h4>
        <h4>city : {profile.city}</h4>
        <h4>isCompleted : {profile.isCompleted ? "Yes" : "No"}</h4>
      </li>
    )
  })
  return (
    <div>
      <h1>User Detail</h1>
      {renderuser}
    </div>
  )
}

export default Read