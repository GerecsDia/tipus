var szam = '35';
var szam2 = '27';

console.log(Number(szam) + Number(szam2));

var esik = true;
if (esik) {
    console.log('esik...');
}

//function calcArea(base, hight)  {   (így is lehet)

//return base*height /2;

var calcArea = function( base, height){   //meg így is
    return base*height /2
}


console.log(typeof calcArea)


var pista = {   //objektum létrehozása

    nev: 'Pisti',
    kor: 28,
    van_kocsi: true
};

console.log(typeof pista)

var szamok = [25, 30, 40];
console.log(typeof szamok);

var nevek = ['Pisti', 'Pali', 'Dani'];
