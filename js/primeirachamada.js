function minhaPrimeiraFuncao () {
    console.log("Olá mundo")
}

function meuPrimeiroFetch() {
    fetch("http://localhost:8080/primeira_chamada").then(
        (respose) => {
            console.log(respose.status)
            console.log(respose.ok)
        }
    )
}

async function meuPrimeiroBody() {
    var response = await fetch("http://localhost:8080/os")
    if (response.ok) {
        var texto = await response.text()

        console.log(texto)
    }
}