import React, { useState } from "react";

export default function DateInput({ onCalculate }) {
  const [days, setDays] = useState("");        // number of days
  const [startDate, setStartDate] = useState(""); // optional date

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(days, startDate); // send both to parent
    setDays("");       // reset input after submit
    setStartDate("");  // reset date input
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
        Number of Days:
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="e.g., 7"
        />
      </label>

      <button type="submit">Get Next Date</button>
    </form>
  );
}
