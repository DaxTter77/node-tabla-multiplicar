const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {
    
    let salida = '';
    let consola = '';

    for (let index = 0; index < hasta; index++) {
        salida += `${base} x ${index + 1} = ${(base * (index + 1))}\n`;
        consola += `${colors.magenta(base)} x ${colors.magenta(index + 1)} = ${colors.yellow((base * (index + 1)))}\n`;
    }
    
    if(listar){
        console.log('==============================='.red)
        console.log(`          TABLA DEL ${colors.cyan(base)}`)
        console.log('==============================='.red)
    
        console.log(consola);
    }

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if(err) throw err;

    //     console.log(`Tabla del ${base} creado`);
    // });
    const nombreArchivo = `tabla-${base}.txt`;
    try {
        fs.writeFileSync('./out/' + nombreArchivo, salida);
        console.log(`Tabla del ${colors.cyan(base)} creado`);
        return nombreArchivo.red;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}