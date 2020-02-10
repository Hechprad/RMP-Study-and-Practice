const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['npm run format', 'npm run lint']),
    // "pre-push": tasks(["cross-env CI=true yarn test"])
  },
}
