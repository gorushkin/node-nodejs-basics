import { promises } from 'fs';
import { checkIfTargetExist, getAbsolutPath } from './utils.js';

const create = async () => {
  const outputFolder = 'src/fs/files';
  const filename = 'fresh.txt';
  const content = 'I am fresh and young';

  const fullPath = getAbsolutPath(outputFolder, filename);

  await checkIfTargetExist(fullPath);

  try {
    await promises.writeFile(fullPath, content);
  } catch (error) {
    console.log(error);
  }
};

await create();
