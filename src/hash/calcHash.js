import { getDirname, getPath } from '../fs/utils.js';
import { createHash } from 'crypto';
import { promises } from 'fs';

const calculateHash = async () => {
  const dirname = getDirname(import.meta.url)
  const filename = 'fileToCalculateHashFor.txt';
  const folder = 'files';
  const pathToFile = getPath(dirname, folder, filename);
  const fileContent = await promises.readFile(pathToFile);
  const hash = createHash('sha256');
  hash.update(fileContent);
  const fileHash = hash.digest('hex');
  console.log(fileHash);
};

await calculateHash();
