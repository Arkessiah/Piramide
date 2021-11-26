// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Arrays III', () => {
  it('La variable piramide es igual a la del enunciado', () => {
    expect(piramide).to.equal(`1\n22\n333\n4444\n55555\n666666\n7777777\n88888888\n999999999\n`);
  });
});
