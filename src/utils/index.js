const capitalize = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const toUpper = (val) => {
  if (!val) return ''
  val = val.toString()
  return val.toUpperCase()
}

export default {
  capitalize,
  toUpper
}