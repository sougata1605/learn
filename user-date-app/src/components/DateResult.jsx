import React from "react";
import { formatDateLong } from "../utils/dateUtils";

export default function DateResult({ date }) {
  if (!date) return null;

  return (
    <section className="result">
      <h2>Next Date</h2>
      <p className="big">{formatDateLong(date)}</p>
    </section>
  );
}
