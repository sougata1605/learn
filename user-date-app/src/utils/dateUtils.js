export function getNextDate(baseDate = new Date(), days = 0) {
  const d = new Date(baseDate); // clone date
  d.setDate(d.getDate() + Number(days));
  return d;
}

export function formatDateLong(date) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
