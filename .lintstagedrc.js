module.exports = {
  '*.{ts,tsx,js,jsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join('--file')}`,
    `npm run test -- --findRelatedTests ${filenames.join(' ')} `
  ]
}
