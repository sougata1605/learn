
import React, { useState } from "react";
import DateInput from "../components/DateInput";
import DateResult from "../components/DateResult";
import History from "../components/History";
import { getNextDate } from "../utils/dateUtils";

export default function CalculatorPage() {
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]); // most recent first

  const handleCalculate = (days,startDate) => {
    


     const base = startDate;
    // alert(base);

     if(startDate==="")
     {
           base = new Date();
     }



    const result = getNextDate(base, days);

    setCurrentResult(result);
    setHistory((h) => [{ days, result }, ...h].slice(0, 10)); // keep last 10
  };

  return (
    <main className="container">
      <DateInput onCalculate={handleCalculate} />
      <DateResult date={currentResult} />
      <History entries={history} />
    </main>
  );
}