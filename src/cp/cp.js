import { fork } from 'child_process';
import { getPath, getDirname } from '../fs/utils.js';

const spawnChildProcess = async (args) => {
  const dirname = getDirname(import.meta.url);
  const filename = 'files/script.js';
  const filePath = getPath(dirname, filename);

  fork(filePath, args);
};

spawnChildProcess();
