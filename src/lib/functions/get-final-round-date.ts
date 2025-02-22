export function getFinalAwardRoundDate(
  initDate: Date,
  intervalDays: number,
): Date {
  const finalAwardRound = new Date(initDate)
  finalAwardRound.setDate(initDate.getDate() + intervalDays)
  return finalAwardRound
}
