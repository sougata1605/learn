// src/components/DateResult.jsx
import React from "react";
import { formatDateLong } from "../utils/dateUtils";

export default function DateResult({ date }) {
  if (!date) return null;

  return (
    <section className="result">
      <h2>Next Date</h2>
      <p className="big">{formatDateLong(date)}</p>
      <p className="small">({date.toISOString().slice(0, 10)})</p>
    </section>
  );
}