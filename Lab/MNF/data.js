let scftans = 0;
function getValues() {
  return {
    num1: Number(document.getElementById('nmb1').value),
    result: Number(document.getElementById('rslt').value),
    operation: document.getElementById('prtn').value
    
  };
}

function actualizarOperacion() {
  const { num1, result, operation } = getValues();
  document.getElementById('currOpe').innerText = `${num1} ${operation} X = ${result}`;
}

["nmb1", "rslt"].forEach(id => {
  document.getElementById(id).addEventListener("input", actualizarOperacion);
});
document.getElementById("prtn").addEventListener("change", actualizarOperacion);

function findMNum() {
  const { num1, result, operation } = getValues();
  let misng;

  switch (operation) {
    case "+":
      misng = result - num1;
      break;
    case "-":
      misng = num1 - result;
      break;
    case "x":
      misng = result / num1;
      break;
    case "/":
      misng = num1 / result;
      break;
    default:
      console.log("Unknown Operation");
      return;
  }
 
  const qawsed = document.getElementById('qawsed');

  if (misng === Infinity || Number.isNaN(misng) || (num1 === 0 && result === 0)) {
    qawsed.innerText = `That operation makes no sense, my friend.`;
    return;
  }

  const formula = misng < 0
    ? `${num1} ${operation} (${misng}) = ${result}`
    : `${num1} ${operation} ${misng} = ${result}`;

    scftans = misng.toExponential();  

  qawsed.innerText = `The missing number is: ${misng}\n${formula}\n\nNormal: ${misng}\nScientific: ${scftans}`;
}
