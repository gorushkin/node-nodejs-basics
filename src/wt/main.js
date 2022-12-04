import os from 'os';
import { Worker } from 'worker_threads';
import { getPath, getDirname } from '../fs/utils.js';

const performCalculations = async () => {
  const dirname = getDirname(import.meta.url);
  const workerFilename = 'worker.js';
  const workerPath = getPath(dirname, workerFilename);
  const cpus = os.cpus();

  const runWorker = (n) => {
    return new Promise((res) => {
      const worker = new Worker(workerPath, { workerData: n });
      worker.on('error', () => res({ status: 'error', data: null }));
      worker.on('message', (data) => res({ status: 'resolved', data }));
    });
  };

  const results = await Promise.all(cpus.map((_, i) => runWorker(10 + i)));
  console.log(results);
};

await performCalculations();
