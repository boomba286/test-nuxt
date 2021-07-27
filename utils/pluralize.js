export default (number, signuLarWord) => {
  const text = `${number} ${signuLarWord}`
  if(number == 1) return text
  return text + 's'
}
