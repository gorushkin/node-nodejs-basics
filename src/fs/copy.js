import { promises } from 'fs';
import { checkIfTargetExist, getAbsolutPath, getPath } from './utils.js';

const copy = async () => {
  const source = 'files';
  const destination = 'files_copy';
  const soursePath = getAbsolutPath(source);
  const destinationPath = getAbsolutPath(destination);

  await checkIfTargetExist(destination);

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
