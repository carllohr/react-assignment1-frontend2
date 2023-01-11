import Header from "./components/Header";
import AddActivity from "./components/AddActivity";
import FilterActivity from "./components/FilterActivity";
import Activities from "./components/Activities";
import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [textFilter, setTextFilter] = useState("");
  const inputRef = useRef(null);
  const [activities, setActivities] = useLocalStorage("activities", [])
  const [radioFilter, setRadioFilter] = useState(activities);
  useEffect(() => {
    inputRef.current.checked = true; // sätt all till att vara icheckad när sidan laddas
  }, []);
  const handleRadioChange = (e) => { // filtrera listan på radio
    const value = e.target.value;
    if (e.target.checked !== true) return;
    if (inputRef.current.checked === true) {
      setRadioFilter(activities);
    }
    if (value === "House work") {
      setRadioFilter(
        activities.filter((activity) => {
          if (value === activity.category) {
            console.log(activity);
            return activity;
          }
          return false;
        })
      );
    }
    if (value === "Yard work") {
      setRadioFilter(
        activities.filter((activity) => {
          if (value === activity.category) {
            return activity;
          }
          return false;
        })
      );
    }
    if (value === "Job related") {
      setRadioFilter(
        activities.filter((activity) => {
          if (value === activity.category) {
            return activity;
          }
          return false;
        })
      );
    }
  };

  const handleFilterChange = (e) => {
    setTextFilter(e.target.value);
  };
  const filtered = !textFilter // filter
    ? radioFilter
    : radioFilter.filter((activity) =>
        activity.activityText.toLowerCase().includes(textFilter.toLowerCase())
      );

  const deleteActivity = (id) => { // delete single activity
    setActivities(activities.filter((activity) => activity.id !== id));
    setRadioFilter(radioFilter.filter((activity) => activity.id !== id));
  };
  const deleteAllActivity = (id) => { //deletes all activities
    setActivities(activities.filter((activity) => activity.id === id));
    setRadioFilter(radioFilter.filter((activity) => activity.id === id));
  };
  const addActivity = (activity) => { // adds input activity to and displays all activities
    const id = Math.floor(Math.random() * 1000);
    const newActivity = { id, ...activity };
    setActivities([...activities, newActivity]);
    inputRef.current.checked = true; 
    setRadioFilter([...activities, newActivity]); 
  };
  return (
    <div className="container">
      <Header />
      <AddActivity addActivity={addActivity} />
      <FilterActivity
        textFilter={textFilter}
        handleFilterChange={handleFilterChange}
        handleRadioChange={handleRadioChange}
        ref={inputRef}
      />
      <Activities
        filtered={filtered}
        onDelete={deleteActivity}
        onDeleteAll={deleteAllActivity}
      />
    </div>
  );
}

export default App;
