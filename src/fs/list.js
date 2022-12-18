import { promises } from 'fs';
import { checkIfTargetNotExist, getPath, getDirname } from './utils.js';

const list = async () => {
  const dirname = getDirname(import.meta.url);
  const folder = 'files';
  const pathToFolder = getPath(dirname, folder);

  await checkIfTargetNotExist(pathToFolder);

  try {
    const list = await promises.readdir(pathToFolder);
    console.log(list);
  } catch (error) {
    console.log('error: ', error);
  }
};

await list();
