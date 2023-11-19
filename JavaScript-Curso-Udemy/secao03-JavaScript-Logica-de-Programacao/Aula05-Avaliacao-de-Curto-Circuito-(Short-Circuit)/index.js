// Intersecção
console.log('Leonardo Takashi Teramatsu' && true && 'Leo');
console.log('Leonardo Takashi Teramatsu' && false && 'Leo');

console.log('' && true && 'Leo');
console.log(true && '' && 'Leo');
console.log("" && true && 'Leo');
console.log(`` && true && 'Leo');
console.log(0 && true && 'Leo');
console.log(true && 0 && 'Leo');
console.log(null && true && 'Leo');
console.log(true && null && 'Leo');
console.log(undefined && true && 'Leo');
console.log(true && undefined && 'Leo');
console.log(NaN && true && 'Leo');
console.log(true && NaN && 'Leo');

function falaOi() {
    return 'Oi';
}

// const vaiExecutar = false;
// const vaiExecutar1 = true;

// vaiExecutar && console.log(falaOi());
// vaiExecutar1 && console.log(falaOi());

let vaiExecutar;
let vaiExecutar1 = 'Leonardo';

console.log(vaiExecutar && falaOi());
console.log(vaiExecutar1 && falaOi());

// União
console.log('Leonardo Takashi Teramatsu' || true || 'Leo');
console.log('Leonardo Takashi Teramatsu' || false || 'Leo');
console.log( false || 'Leonardo Takashi Teramatsu' || 'Leo');
console.log( false || 'Leo' || 'Leonardo Takashi Teramatsu');
console.log( false || false || '');
console.log( false || false || null);
console.log( 0 || "" || null);
