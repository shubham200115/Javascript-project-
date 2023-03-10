const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

const print = () => {
  const interior = document.getElementById("int").value;
  const bindingType = document.getElementById("bit").value;
  const bookSize = document.getElementById("bs").value;
  const paperType = document.getElementById("pt").value;
  const numberOfPage = document.getElementById("number").value;
  let sum = +interior + +bindingType + +bookSize + +paperType;
  let finalCost = sum * +numberOfPage;
  result.textContent = finalCost;
};
submitBtn.addEventListener("click", print);

