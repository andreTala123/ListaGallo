let button = document.querySelector("button");

button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let h2 = document.querySelector("h2");
    if ((num1 / 2) = 0)
        h2.innerHTML = `${num1} é Um Número Par`;
    else
        h2.innerHTML = `${num1} é Um Número Impar`;
})