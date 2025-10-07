const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")

function ex01() {
    alert("chamou 01")
}

btnEx01.addEventListener('click', ex01)
function ex02() {
    alert("chamou 02")
}

btnEx02.addEventListener('click', ex02)