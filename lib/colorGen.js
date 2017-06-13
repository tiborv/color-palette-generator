const color = require('color')

const genMix = (length, arr) => {
  const arr1 = arr
    .slice(0, arr.length / 2)

  const arr2 = arr.slice(arr.length / 2)

  return arr1.reduce((arr, v, i) => arr.concat(v, arr2[i]), [])
}

module.exports = (baseColor, length, mix) => {
  const bc = color(baseColor)
  const baseHue = bc.hue()
  const step = 240 / length
  const arr = Array.apply(null, { length }).map(Number.call, Number)
  const steps = mix ? genMix(length, arr) : arr

  return steps.map(s => bc.rotate((baseHue + step * s) % 240).hex())
}
