import React from 'react';

const hw2 = () => {
  return (
    <>
    <div className='container' style={{display:"grid", textAlign:'center', gap:'10px', width:"800px"}}>
      <div style={{border:"3px solid black", gridArea:"1/1/2/4"}}>
        <p style={{padding:"20px", fontSize:"30px", fontWeight:"bold"}}>Header</p>
      </div>

      <div style={{border:"3px solid black", gridArea:"2/1/2/4"}}>
        <p style={{padding:"10px", fontSize:"30px", fontWeight:"bold"}}>Nav</p>
      </div>

      <div style={{border:"3px solid black", gridArea:"3/1/4/2"}}>
        <p style={{padding:"80px", fontSize:"30px", fontWeight:"bold"}}>Aside</p>
      </div>

      <div style={{border:"3px solid black", gridArea:"3/2/4/4"}}>
        <p style={{padding:"80px", fontSize:"30px", fontWeight:"bold"}}>Section</p>
      </div>

      <div style={{border:"3px solid black", gridArea:"4/1/5/4"}}>
        <p style={{padding:"50px", fontSize:"30px", fontWeight:"bold"}}>Footer</p>
      </div>

    </div>
    </>
  )
}

export default hw2;