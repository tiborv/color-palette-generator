const colorGen = require('../lib/colorGen')
const { test } = require('ava')

test('test', t => {
  t.deepEqual(colorGen('#d60000', 12), [
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
    '#008FD6'
  ])
})
