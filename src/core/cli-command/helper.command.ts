import chalk from 'chalk';
import { CliCommandInterface } from './cli-command.interface.js';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
    ${chalk.yellow('Программа для подготовки данных для REST API сервера.')}
    ${chalk.yellow('Пример:')}
        ${chalk.bgCyan.bold('cli.js --<command> [--arguments]')}
    ${chalk.yellow('Команды:')}
        ${chalk.blue.bold('--version:')}                   ${chalk.green('# выводит номер версии')}
        ${chalk.blue.bold('--help:')}                      ${chalk.green('# печатает этот текст')}
        ${chalk.blue.bold('--import <path>:')}             ${chalk.green('# импортирует данные из TSV')}
        ${chalk.blue.bold('--generate <n> <path> <url>')}  ${chalk.green('# генерирует произвольное количество тестовых данных')}
        `);
  }
}
