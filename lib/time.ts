export const KOLKATA_TZ = "Asia/Kolkata";

export function formatKolkataTime(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: KOLKATA_TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}
