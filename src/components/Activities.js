import React from "react";
import Activity from "./Activity";

const Activities = ({ filtered, onDelete, onDeleteAll }) => {
  return (
    <>
      <div className="activities-list-header">
        <span>Activity</span>
        <span>Category</span>
        <span>Date</span>
        <button onClick={() => onDeleteAll()}>Remove all</button>
      </div>
      {filtered.map((activity) => (
        <Activity key={activity.id} activity={activity} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Activities;
