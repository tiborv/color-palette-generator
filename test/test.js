const colorGen = require('../')
const { test } = require('ava')

test('test standard', t => {
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

test('test mix', t => {
  const colors = [
    '#D60000',
    '#00D600',
    '#D64700',
    '#00D647',
    '#D68F00',
    '#00D68F',
    '#D6D600',
    '#00D6D6',
    '#8FD600',
    '#008FD6',
    '#47D600',
    '#0047D6'
  ]
  const genColors = colorGen('#d60000', 12, true)
  t.deepEqual(colors, genColors)
  t.is(colors.length, genColors.length)
})
