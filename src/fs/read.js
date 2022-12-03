import { promises } from 'fs';
import { checkIfTargetNotExist, getPath, getDirname } from './utils.js';

const read = async () => {
  const dirname = getDirname(import.meta.url);
  const filename = 'fileToRead.txt';
  const folder = 'files';
  const pathToFile = getPath(dirname, folder, filename);

  await checkIfTargetNotExist(pathToFile);

  try {
    const fileContent = await promises.readFile(pathToFile, 'utf-8');
    console.log(fileContent);
  } catch (error) {
    console.log('error: ', error);
  }
};

await read();
