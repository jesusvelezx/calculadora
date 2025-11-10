// Proyecto Calculadora =>
// Creamos las constantes globlales

const displayActual = document.querySelector('#displayActual');
const displayAnterior = document.querySelector('#displayAnterior');
const botones = document.querySelectorAll('.btn');

// Creamos las variables
let display = [];
let numeroAnterior = '';
let numeroActual = '';
let operador = '';

// Creamos la lógica
botones.forEach(boton => {
  boton.addEventListener('click', (e) => {
    const btn = e.target.textContent;

    if (e.target.classList.contains('btn-number')) {
      console.log(`click en ${boton.textContent}`);
      display.push(btn);
      displayActual.textContent = display.join('');
    }

    if (e.target.classList.contains('btn-operator')) {
      console.log(`click en ${boton.textContent}`)
      operador = btn;
      numeroAnterior = display.join('');
      displayAnterior.textContent = `${numeroAnterior.toLocaleString()} ${operador}`;
      display = [];
      displayActual.textContent = 0;
    }

    if (e.target.id === 'igual') {

      console.log(boton.textContent);
      numeroActual = display.join('');
      displayAnterior.textContent = `${numeroAnterior.toLocaleString()} ${operador} ${numeroActual.toLocaleString()} =`;

      let operacion = '';

      let numUno = parseFloat(numeroAnterior);
      let numDos = parseFloat(numeroActual);

      const actualizarResultado = (operacion) => {
        displayActual.textContent = operacion.toLocaleString();
        numeroAnterior = operacion;
        displayActual.textContent = operacion.toLocaleString();
      };

      if (operador === '+') {
        operacion = numUno + numDos;
        actualizarResultado(operacion);

      } else if (operador === '-') {
        operacion = numUno - numDos;
        actualizarResultado(operacion);

      } else if (operador === '×') {
        operacion = numUno * numDos;
        actualizarResultado(operacion);

      } else if (operador === '÷') {
        operacion = numUno / numDos;
        displayActual.textContent = operacion.toFixed(2);
        actualizarResultado(operacion);

      } else if (operador === '%') {
        operacion = (numUno * numDos) / 100;
        displayActual.textContent = operacion;
      }
    }

    if (e.target.id === 'delete') {
      display.pop();
      numeroActual = display.join('');
      displayActual.textContent = numeroActual;
    }

    if (e.target.id === 'clear') {
      display = [];
      numeroAnterior = '';
      numeroActual = '';
      operador = '';

      displayActual.textContent = 0;
      displayAnterior.textContent = 0;
    }

  })
  })