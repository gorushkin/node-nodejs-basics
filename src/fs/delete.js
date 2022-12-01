import { promises } from 'fs';
import { checkIfTargetNotExist, getAbsolutPath } from './utils.js';

const remove = async () => {
  const filename = 'fileToRemove.txt';
  const folder = 'files';
  const pathToFile = getAbsolutPath(folder, filename);

  await checkIfTargetNotExist(pathToFile);

  try {
    await promises.rm(pathToFile);
  } catch (error) {
    console.log(error);
  }
};

await remove();
