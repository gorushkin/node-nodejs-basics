import { promises } from 'fs';
import { checkIfTargetExist, checkIfTargetNotExist, getAbsolutPath } from './utils.js';

const rename = async () => {
  const currentName = 'wrongFilename.txt';
  const folder = 'files';
  const newName = 'properFilename.md';

  const currentPath = getAbsolutPath(folder, currentName);
  const newPath = getAbsolutPath(folder, newName);

  await checkIfTargetNotExist(currentPath);
  await checkIfTargetExist(newPath);

  try {
    await promises.rename(currentPath, newPath);
  } catch (error) {
    console.log('error: ', error);
  }
};

await rename();
