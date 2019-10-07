import chalk from 'chalk';

export const info = (msg: string) =>
  console.log(chalk`{bgBlue [INFO]} {blue ${msg}}`);

export const error = (msg: string) =>
  console.log(chalk`{bgRed [ERROR]} {red ${msg}}`);

export default {
  info,
  error,
};
