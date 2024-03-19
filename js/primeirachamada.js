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