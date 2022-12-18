import { promises } from 'fs';
import { checkIfTargetNotExist, getPath, getDirname } from './utils.js';

const remove = async () => {
  const dirname = getDirname(import.meta.url);
  const filename = 'fileToRemove.txt';
  const folder = 'files';
  const pathToFile = getPath(dirname, folder, filename);

  await checkIfTargetNotExist(pathToFile);

  try {
    await promises.rm(pathToFile);
  } catch (error) {
    console.log(error);
  }
};

await remove();
