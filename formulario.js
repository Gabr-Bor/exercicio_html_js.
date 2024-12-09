const forms = document.getElementById("forms")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

function ValidaNumber(num1, num2){
    return num2 > num1
}

forms.addEventListener("submit", function(e){
    e.preventDefault()

    const num1 = parseFloat(n1.value)
    const num2 = parseFloat(n2.value)

    const result = ValidaNumber(num1 ,num2)

    if(result){
        alert("Parabéns, o campo 2 é maior que o campo 1")
    }else{
        alert("o campo 2 não é maior")
    }
})

