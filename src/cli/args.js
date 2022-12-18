const parseArgs = () => {
  const argPrefix = '--';
  const args = process.argv.slice(2);
  const formattedArgs = args
    .reduce(
      (acc, item, index, array) =>
        item.slice(0, argPrefix.length) !== argPrefix
          ? acc
          : [...acc, `${item.slice(2)} is ${array[index + 1]}`],
      []
    )
    .join(', ');
  console.log(formattedArgs);
};

parseArgs();
