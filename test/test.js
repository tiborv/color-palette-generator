const colorGen = require('../')
const { test } = require('ava')

test('test', t => {
  const colors = [
    '#D60000',
    '#D64700',
    '#D68F00',
    '#D6D600',
    '#8FD600',
    '#47D600',
    '#00D600',
    '#00D647',
    '#00D68F',
    '#00D6D6',
    '#008FD6',
    '#0047D6'
  ]
  const genColors = colorGen('#d60000', 12)
  t.deepEqual(colors, genColors)
  t.is(colors.length, genColors.length)
})
