import { promises } from 'fs';
import { checkIfTargetNotExist, getAbsolutPath } from './utils.js';

const read = async () => {
  const filename = 'fileToRead.txt';
  const folder = 'src/fs/files';
  const pathToFile = getAbsolutPath(folder, filename);

  await checkIfTargetNotExist(pathToFile);

  try {
    const fileContent = await promises.readFile(pathToFile, 'utf-8');
    console.log(fileContent);
  } catch (error) {
    console.log('error: ', error);
  }
};

await read();
