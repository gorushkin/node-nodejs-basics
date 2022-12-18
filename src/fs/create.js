import { promises } from 'fs';
import { checkIfTargetExist, getPath, getDirname } from './utils.js';

const create = async () => {
  const dirname = getDirname(import.meta.url);
  const outputFolder = 'files';
  const filename = 'fresh.txt';
  const content = 'I am fresh and young';

  const fullPath = getPath(dirname, outputFolder, filename);

  await checkIfTargetExist(fullPath);

  try {
    await promises.writeFile(fullPath, content);
  } catch (error) {
    console.log(error);
  }
};

await create();
