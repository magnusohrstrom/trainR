import React from "react";

const TrainingModule = (props) => {
  return (
    <section className = "training-module" >
      <form onSubmit={props.onSubmit} className = "training-form" >
        <label htmlFor="running">Running</label>
        <input name="running" type = "checkbox" value = "running" onChange = {props.onChange} />
        <label htmlFor="yoga">Yoga</label>
        <input name="yoga" type = "checkbox" value = "yoga" onChange = {props.onChange} />
        <label htmlFor="aerobics">Aerobics</label>
        <input name="aerobics" type = "checkbox" value = "aerobics" onChange = {props.onChange} />
        <label htmlFor="soccer" >Soccer</label>
        <input name="soccer" type = "checkbox" value = "soccer" onChange = {props.onChange} />
        <label htmlFor="dance">Dance</label>
        <input name="dance" type = "checkbox" value = "dance" onChange = {props.onChange} />
        <label htmlFor="biking">Biking</label>
        <input name="biking" type = "checkbox" value = "biking" onChange = {props.onChange} />
        <label htmlFor="Hiking">Hiking</label>
        <input name="hiking" type = "checkbox" value = "hiking" onChange = {props.onChange} />
        <input type="submit" value="Go!" />
      </form>
    </section>
  );
}

export default TrainingModule;