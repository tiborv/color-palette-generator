const color = require('color')

module.exports = (baseColor, numOfColors) => {
  const bc = color(baseColor)
  const baseHue = bc.hue()
  const res = [bc.hex()]
  const step = 240 / numOfColors
  for (let i = 1; i < numOfColors; i++) {
    const nextColor = bc.rotate((baseHue + step * i) % 240)
    res[i] = nextColor.hex()
  }
  return res
}
