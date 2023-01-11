import React from 'react'
import {useRef} from 'react';

const FilterActivity = ({textFilter, handleFilterChange, handleRadioChange}, ref) => {
  return (
    <div className="activities-filter">
          <label htmlFor="filter">Filter by:</label>
          <input
            id="inputFilter"
            type="text"
            value={textFilter}
            onChange={handleFilterChange}
          />

          <input
            ref={ref}
            type="radio"
            id="radioAll"
            name="filter-button"
            value="All"
            onChange={handleRadioChange}
          />
          <label htmlFor="radioAll">All</label>

          <input
            type="radio"
            id="radioHouse"
            name="filter-button"
            value="House work"
            onChange={handleRadioChange}
          />

          <label htmlFor="radioHouse">House work</label>

          <input
            type="radio"
            id="radioYard"
            name="filter-button"
            value="Yard work"
            onChange={handleRadioChange}
          />
          <label htmlFor="radioYard">Yard work</label>

          <input
            type="radio"
            id="radioJob"
            name="filter-button"
            value="Job related"
            onChange={handleRadioChange}
          />
          <label htmlFor="radioJob">Job related</label>
          <br />
        </div>
  )
}

export default React.forwardRef(FilterActivity)