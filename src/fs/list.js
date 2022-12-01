import { promises } from 'fs';
import { checkIfTargetNotExist, getAbsolutPath } from './utils.js';

const list = async () => {
  const folder = 'src/fs/files';
  const pathToFolder = getAbsolutPath(folder);

  await checkIfTargetNotExist(pathToFolder);

  try {
    const list = await promises.readdir(pathToFolder);
    console.log(list);
  } catch (error) {
    console.log('error: ', error);
  }
};

await list();
