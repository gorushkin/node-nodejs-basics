const parseEnv = () => {
  const prefix = 'RSS_';
  const variables = process.env;
  const filtredVariables = Object.entries(variables)
    .filter(([key]) => key.slice(0, prefix.length) === prefix)
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');
  console.log(filtredVariables);
};

parseEnv();
