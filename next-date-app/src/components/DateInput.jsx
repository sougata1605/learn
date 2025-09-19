
import React, { useState } from "react";

export default function DateInput({ onCalculate }) {
  
  const [days, setDays] = useState("");

  const [startDate, setStartDate] = useState(""); // user selected date 

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const n = parseInt(days, 10);
    if (days.trim() === "") {
      alert("Please enter a number of days.");
      return;
    }
    if (Number.isNaN(n)) {
      alert("Please enter a valid whole number (e.g., 5).");
      return;
    }
    onCalculate(n);
    
    setDays("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
<label>
  Start Date:
  <input
    type="date"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
  />
</label>

<label>
        Number of day:
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="e.g., 7"
          inputMode="numeric"
        />
      </label>
      <button type="submit">Get Next Date</button>
    </form>
  );
}