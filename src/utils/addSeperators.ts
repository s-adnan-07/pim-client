function addSeperators(value: number) {
  const reversedString = value.toString().split('').reverse().join('')
  const seperatedString = reversedString.replace(/\d{3}(?=\d)/g, x => x + ',')
  return seperatedString.split('').reverse().join('')
}

export default addSeperators
