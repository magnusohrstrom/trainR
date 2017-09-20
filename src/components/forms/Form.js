import React from "react";

const Form = (props) => {
  return (
    <div>
    {
    props.show &&
    <form onSubmit = {props.onSubmit}>
      <label htmlFor = {props.name1}>{props.name1}</label>
      <input name = {props.name1} type='text' onChange = {props.onChange} placeholder={props.placeholder1} value = {props.stateName1}/>
      <label htmlFor = {props.name2}>{props.name2}</label>
      <input name ={props.name2} type='password' onChange = {props.onChange} placeholder={props.placeholder2} value = {props.stateName2} />

      {props.formName === 'register' && <label htmlFor={props.name3} >{props.name3}</label>}
      {props.formName === 'register' && <input name = {props.name3}  type='text' onChange = {props.onChange} placeholder={props.placeholder2} value = {props.stateName3}/>}

        <input type="submit" value = {props.button1} />
        <button onClick = {props.cancelButton}>Cancel</button>
        <button onClick ={props.signInWithGoogle}>Sign in with Google</button>

    </form>}
    </div>
  );
}

export default Form;
