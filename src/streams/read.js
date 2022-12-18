import { createReadStream } from 'fs';
import { getDirname, getPath } from '../fs/utils.js';

const read = async () => {
  const dirname = getDirname(import.meta.url);
  const filename = 'fileToRead.txt';
  const folder = 'files';
  const pathToFile = getPath(dirname, folder, filename);
  const readable = createReadStream(pathToFile);

  readable.pipe(process.stdout)
};

await read();
