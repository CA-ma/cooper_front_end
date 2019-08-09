import React from 'react';

const InputFields = (props) => {
  return (
    <>
      <div>
        <label>Age</label>&nbsp;&nbsp;
        <input id="age" onChange={props.inputChangeHandler} />&nbsp;&nbsp;

        <span>Gender</span>&nbsp;&nbsp;
        <select id="gender" onChange={props.inputChangeHandler}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      
      <div>
        <label>Distance</label>&nbsp;&nbsp;
        <input id="distance" onChange={props.inputChangeHandler} />&nbsp;&nbsp;
        <span>[meters]</span>
      </div>
    </>
  )
}

export default InputFields;