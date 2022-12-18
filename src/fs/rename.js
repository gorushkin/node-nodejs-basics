import { promises } from 'fs';
import { checkIfTargetExist, checkIfTargetNotExist, getPath, getDirname } from './utils.js';

const rename = async () => {
  const dirname = getDirname(import.meta.url);
  const currentName = 'wrongFilename.txt';
  const folder = 'files';
  const newName = 'properFilename.md';

  const currentPath = getPath(dirname, folder, currentName);
  const newPath = getPath(dirname, folder, newName);

  await checkIfTargetNotExist(currentPath);
  await checkIfTargetExist(newPath);

  try {
    await promises.rename(currentPath, newPath);
  } catch (error) {
    console.log('error: ', error);
  }
};

await rename();
