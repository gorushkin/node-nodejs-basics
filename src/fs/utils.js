import path from 'path';
import { promises } from 'fs';

export const getPath = (...args) => {
  const getReccurPath = (list) => {
    if (list.length === 1) return list[0];
    const [head, ...tail] = list;
    return path.join(head, getReccurPath(tail));
  };

  return getReccurPath(args);
};

export const getAbsolutPath = (...args) => getPath(path.resolve(), getPath.apply(null, args));

export const checkIfTargetExist = async (target, ifExistError = true) => {
  const errorMessage = 'FS operation failed';

  try {
    await promises.stat(target);
    if (ifExistError) throw new Error(errorMessage);
  } catch (error) {
    if (error.message === 'FS operation failed') throw new Error(errorMessage);
    if (error.code === 'ENOENT' && !ifExistError) throw new Error(errorMessage);
  }
};

export const checkIfTargetNotExist = async (target) => checkIfTargetExist(target, false);
