import { spawn } from 'child_process';
import { getPath, getDirname } from '../fs/utils.js';

const spawnChildProcess = async (args) => {
  const dirname = getDirname(import.meta.url);
  const filename = 'files/script.js';
  const filePath = getPath(dirname, filename);

  const checkedArgs = args?.length ? [filePath, ...args] : [filePath];

  const child = spawn('node', checkedArgs);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess();
