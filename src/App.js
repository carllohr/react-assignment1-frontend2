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
  const inputRef = useRef(null); // useRef to get radioAll element
  const [activities, setActivities] = useLocalStorage("activities", []);
  const [radioFilter, setRadioFilter] = useState(activities);
  const [category, setCategory] = useState();
  useEffect(() => {
    inputRef.current.checked = true; // set category to all when page loads
  }, []);

  const handleRadioChange = (e) => {
    // filter list by radioinput
    const value = e.target.value;
    if (value === "All") {
      setRadioFilter(activities);
      setCategory(value);
    } else if (value === "House work") {
      setCategory(value);
      setRadioFilter(
        activities.filter((activity) => {
          if (value === activity.category) {
            return activity;
          }
          return false;
        })
      );
    } else if (value === "Yard work") {
      setCategory(value);
      setRadioFilter(
        activities.filter((activity) => {
          if (value === activity.category) {
            return activity;
          }
          return false;
        })
      );
    } else if (value === "Job related") {
      setCategory(value);
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
  const filtered = !textFilter// filtering the list, then passing it as prop to Activities
    ? radioFilter
    : radioFilter.filter((activity) =>
        activity.activityText.toLowerCase().includes(textFilter.toLowerCase())
      );

  const deleteActivity = (id) => {
    // delete single activity
    setActivities(activities.filter((activity) => activity.id !== id));
    setRadioFilter(radioFilter.filter((activity) => activity.id !== id));
  };
  const deleteAllActivity = (id) => {
    //deletes all activities
    setActivities(activities.filter((activity) => activity.id === id));
    setRadioFilter(radioFilter.filter((activity) => activity.id === id));
  };
  const addActivity = (activity) => {
    // adds input activity to and displays all activities
    const id = Math.floor(Math.random() * 1000);
    const newActivity = { id, ...activity };
    setActivities([...activities, newActivity]);
    if (category === newActivity.category || inputRef.current.checked) {
      setRadioFilter([...radioFilter, newActivity]);
    }
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
