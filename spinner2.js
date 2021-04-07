const spinner = function () {
  const spinnerElements = ['|', '/', '-', '|'];
  for (const index in spinnerElements) {
    setTimeout(() => {
      process.stdout.write(`\r${spinnerElements[index]}   `);
    }, index * 200);
  }
};
spinner();