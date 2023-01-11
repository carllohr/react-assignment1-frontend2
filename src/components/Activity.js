import React from 'react'

const Activity = ({activity, onDelete}) => {

  const todaysDate = new Date().toLocaleDateString();

  const activityDate = todaysDate > activity.date ?
  <span className="passed-date">{activity.date}</span> :
  <span className="date-item">{activity.date} </span>

  return (
    <div className="activity-list-item">
        <span className="activity-item">{activity.activityText}</span>
        <span className="category-item">{activity.category}</span>
        {activityDate}
        <button onClick={() => onDelete(activity.id)}>Remove</button>
    </div>
  )
}

export default Activity