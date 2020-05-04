const { scryptSync } = require('crypto')

function scryptsy(
  key: Buffer,
  salt: Buffer,
  N: number,
  r: number,
  p: number,
  dklen: number,
  progressCb: () => any,
) {
  return scryptSync(key, salt, dklen, { N, r, p, maxmem: 129 * N * r })
}

module.exports = scryptsy
