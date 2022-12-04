import { createReadStream, createWriteStream } from 'fs';
import { getDirname, getPath } from '../fs/utils.js';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
  const dirname = getDirname(import.meta.url);
  const gunzip = createUnzip();
  const inputFilename = 'archive.gz';
  const outputFilename = 'fileToCompress.txt';
  const folder = 'files';
  const inputPath = getPath(dirname, folder, inputFilename);
  const outputPath = getPath(dirname, folder, outputFilename);

  const readable = createReadStream(inputPath);
  const writeable = createWriteStream(outputPath);

  pipeline(readable, gunzip, writeable, (err) => {
    if (err) console.log(err);
  });
};

await decompress();
