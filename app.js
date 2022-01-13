const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
// const [ , , arg3] = process.argv;
// const [ , base = 5] = arg3.split('=')


crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => console.log('Nombre del Archivo:', msg))
    .catch(err => console.log("Error:", err));


