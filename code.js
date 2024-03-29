
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
   count += birdsPerDay[i];
 }
  return count;
}
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let count = 0;
  const DAYS_PER_WEEK = 7
  let start = (week - 1) * DAYS_PER_WEEK; // 0,7,14 ...
  let border = week * DAYS_PER_WEEK; // < 7 | < 14 etc.
    for (let i = start; i < border; i++) {
     count += birdsPerDay[i];
   }
  return count;
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
   if (i%2 == 0){ // even positions
     birdsPerDay[i]++;
   }
 }
  return birdsPerDay;
}
