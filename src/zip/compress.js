import { createReadStream, createWriteStream } from 'fs';
import { getDirname, getPath } from '../fs/utils.js';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
  const dirname = getDirname(import.meta.url);
  const gzip = createGzip();
  const inputFilename = 'fileToCompress.txt';
  const outputFilename = 'archive.gz';
  const folder = 'files';
  const inputPath = getPath(dirname, folder, inputFilename);
  const outputPath = getPath(dirname, folder, outputFilename);

  const readable = createReadStream(inputPath);
  const writeable = createWriteStream(outputPath);

  pipeline(readable, gzip, writeable, (err) => {
    if (err) console.log(err);
  });
};

await compress();
