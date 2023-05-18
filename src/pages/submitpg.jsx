import React from 'react'


function Submitpg(props) {
  const details = JSON.parse(localStorage.getItem('studentData'));
  return (
    <div className="main">
      <h1>Form View</h1>
<div className="view" >
      Name   : {details.name} <br/><br/>
      Age    : {details.age}  <br/><br/>
      Class  : {details.class} <br/><br/>
      Mark   : {details.mark} <br/><br/>
      Status : {details.mark >= 50? "PASS" : "FAIL"}
</div>

    
    </div>
  )
}

export default Submitpg