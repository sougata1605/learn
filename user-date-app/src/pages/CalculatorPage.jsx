import React, { useState } from "react";
import DateInput from "../components/DateInput";
import DateResult from "../components/DateResult";
import History from "../components/History";
import { getNextDate } from "../utils/dateUtils";

export default function CalculatorPage() {
  // Result and history state
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);

  // Function called by DateInput
  const handleCalculate = (daysInput, dateInput) => {
    const n = Number(daysInput);
    if (isNaN(n) || n < 0) {
      alert("Please enter a valid number of days.");
      return;
    }

    // Use user date or today
    const base = dateInput ? new Date(dateInput) : new Date();
    const result = getNextDate(base, n);

    setCurrentResult(result);
    // Store last 10 entries
    setHistory((h) => [{ days: n, startDate: base, result }, ...h].slice(0, 10));
  };

  return (
    <main className="container">
      <DateInput onCalculate={handleCalculate} />
      <DateResult date={currentResult} />
      <History entries={history} />
    </main>
  );
}
