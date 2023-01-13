import React from "react";
import { useState } from "react";

const AddActivity = ({addActivity}) => {
  const [activityText, setActivityText] = useState("");
  const [category, setCategory] = useState("House work");
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const onSubmit = (e) => {
    e.preventDefault();
    if(!activityText){
      alert("Cannot enter empty input");
      return;
    }
  

    addActivity({activityText, category, date});

    setActivityText("");
    setDate(new Date().toLocaleDateString())

  }

  return ( // form submit triggas av "enter" automatiskt, eller vid klick av input type submit
    <form onSubmit={onSubmit}> 
      <label htmlFor="inputActivity">Activity: </label>
      <br />
      <input value={activityText} type="text" onChange={(e) => setActivityText(e.target.value)} maxLength="20" />
      <input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
      <select name="category" value={category} onChange={(e) => {const selecetedCategory = e.target.value;  setCategory(selecetedCategory)}}>
        <option value="House work">House work</option>
        <option value="Yard work">Yard work</option>
        <option value="Job related">Job related</option>
      </select>
      <br />
      <br />
      <input type="submit" /> 
    </form>
  );
};
export default AddActivity;
