import fs from 'fs';

export const createDir = (dirName) => fs.mkdirSync(dirName);
export const writeFile = (fileName, content) =>
  fs.writeFileSync(fileName, content);
export const ifDirExist = (dir) => fs.existsSync(dir);
