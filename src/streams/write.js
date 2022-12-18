import { createWriteStream } from 'fs';
import { getDirname, getPath } from '../fs/utils.js';

const write = async () => {
  const dirname = getDirname(import.meta.url);
  const filename = 'fileToWrite.txt';
  const folder = 'files';
  const pathToFile = getPath(dirname, folder, filename);
  const writeable = createWriteStream(pathToFile);
  const readable = process.stdin;

  writeable.on('open', () => readable.pipe(writeable));
};

await write();
