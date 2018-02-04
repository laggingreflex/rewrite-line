module.exports = (...msg) => {
  process.stdout.clearLine();
  process.stdout.write(...msg);
  process.stdout.cursorTo(0);
}
