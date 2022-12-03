import { promises } from 'fs';
import { checkIfTargetExist, getPath, getDirname } from './utils.js';

const copy = async () => {
  const dirname = getDirname(import.meta.url);
  const source = 'files';
  const destination = 'files_copy';
  const soursePath = getPath(dirname, source);
  const destinationPath = getPath(dirname, destination);

  await checkIfTargetExist(destinationPath);

  try {
    await promises.mkdir(destinationPath);

    const filenames = await promises.readdir(soursePath);
    const promiseList = filenames.map((filename) => {
      const fileSource = getPath(soursePath, filename);
      const fileDestination = getPath(destinationPath, filename);
      return promises.copyFile(fileSource, fileDestination);
    });
    await Promise.all(promiseList);
  } catch (error) {
    console.log('error: ', error);
  }
};

copy();
