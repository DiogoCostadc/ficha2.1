function nota(){
    let lista = document.getElementById("lista")
    let value = document.getElementById("item").value
    lista.innerHTML += `<li>${value}</li>`
}