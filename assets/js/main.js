function alteraTitulo(textoCaixa) {
  const caixa = document.querySelector(".container");

  caixa.innerHTML = '';
  
  
  const p = criaP();
  
  p.innerHTML = texto;
  
  caixa.appendChild(p);


  const diaDaSemana = weekDay;
  const day = pegaDia;

  let texto = `${diaDaSemana}, ${day}`;

  return alteraTitulo(texto);
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function diaDaSemana(pegaWeek) {
  let dataExercicio;

  switch (pegaData) {
    case 0:
      dataExercicio = "Domingo";
      return dataExercicio;
    case 1:
      dataExercicio = "Segunda-feira";
      return dataExercicio;
    case 2:
      dataExercicio = "Terça-feira";
      return dataExercicio;
    case 3:
      dataExercicio = "Quarta-feira";
      return dataExercicio;
    case 4:
      dataExercicio = "Quinta-feira";
      return dataExercicio;
    case 5:
      dataExercicio = "Sexta-feira";
      return dataExercicio;
    case 6:
      dataExercicio = "Sábado";
      return dataExercicio;
    default:
      "";
  }
}

const data = new Date("2019-10-7 22:52");
const pegaData = data.getDay();
const weekDay = diaDaSemana(pegaData);
const pegaDia = data.getDate();

console.log(weekDay, pegaDia);
