import React from "react";
import { formatDateLong } from "../utils/dateUtils";

export default function History({ entries = [] }) {
  if (!entries.length) return null;

  return (
    <aside className="history">
      <h3>History</h3>
      <ul>
        {entries.map((it, i) => (
          <li key={i}>
            From {formatDateLong(it.startDate)} + {it.days} day(s) → {formatDateLong(it.result)}
          </li>
        ))}
      </ul>
    </aside>
  );
}
