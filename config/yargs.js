const argv = require("yargs")
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true',
        describe: 'La base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Ayuda a saber si se quiere listar la tabla en el log'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Es el número hasta el cual va a ir la tabla de multiplicar',
        demandOption: true
    })
    .check( (argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }

        if(isNaN(argv.h)){
            throw 'El valor \"hasta\" tiene que ser un número';
        }

        return true;
    })
    .argv;

module.exports = argv;