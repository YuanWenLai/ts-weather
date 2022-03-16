import { Command } from 'commander';
const program = new Command();
program
    .option('-V, --vsersion', 'output version number')
    .option('-c, --city', 'add city name')

program.parse(process.argv);
const options = program.opts();
    // console.log(233,options.city)

