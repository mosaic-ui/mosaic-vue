export const mapEnumKeys = (elEnum, trim) => {
  let arr = Object.keys(elEnum)

  if (trim) {
    arr = arr.slice(0, trim)
  }

  arr.reduce((acc, member) => {
    acc[member] = member
    return acc
  }, {})

  return arr
}