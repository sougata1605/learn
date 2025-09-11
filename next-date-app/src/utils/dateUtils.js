export function getNextDate(baseDate = new Date(), days = 0) {
  // create a new Date to avoid mutating the argument
  const d = new Date(baseDate);
  d.setDate(d.getDate() + Number(days)); // Date handles month/year rollovers
  return d;
}

export function formatDateLong(date) {
  if (!date) return "";
  // Example: "Thursday, 11 September 2025"
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}