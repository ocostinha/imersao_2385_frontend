async function carregarOs() {
    var response = await fetch("http://localhost:8080/os")
    if (response.ok) {
        var body = await response.json()
        var tabela = document.getElementById("tabelaBuscar")
        var corpoTabela = tabela.getElementsByTagName("tbody")[0]

        corpoTabela.innerHTML = ""

        body.forEach(os => {
            const newRow = corpoTabela.insertRow()

            var newColumId = newRow.insertCell()
            var newTextId = document.createTextNode(os.id)
            newColumId.appendChild(newTextId)

            var newColumProprietario = newRow.insertCell()
            var newTextProprietario = document.createTextNode(os.proprietario)
            newColumProprietario.appendChild(newTextProprietario)

            var newColumEntrada = newRow.insertCell()
            var newTextEntrada = document.createTextNode(os.entradaLab)
            newColumEntrada.appendChild(newTextEntrada)

            var newColumDefeito = newRow.insertCell()
            var newTextDefeito = document.createTextNode(os.defeito)
            newColumDefeito.appendChild(newTextDefeito)

            var newColumEntrega = newRow.insertCell()
            var newTextEntrega = document.createTextNode(os.previsaoEntrega)
            newColumEntrega.appendChild(newTextEntrega)

            var newColumStatus = newRow.insertCell()
            var newTextStatus = document.createTextNode(os.statusConcerto)
            newColumStatus.appendChild(newTextStatus)

            var newColumObservacoes = newRow.insertCell()
            var newTextObservacoes = document.createTextNode(os.observacoes)
            newColumObservacoes.appendChild(newTextObservacoes)

            var newColumSistema = newRow.insertCell()
            var newTextSistema = document.createElement("a")
            newTextSistema.appendChild(document.createTextNode("Alterar"))
            newTextSistema.href="#"
            newTextSistema.onclick = function () {
                return consultarOs(os.id)
            }
            newColumSistema.appendChild(newTextSistema)
        })
    }
}

async function consultarOs(id) {
    var response = await fetch(`http://localhost:8080/os/${id}`)
    if (response.ok) {
        var body = await response.json()

        document.getElementById("id").value = body.id
        document.getElementById("proprietario").value = body.proprietario
        document.getElementById("tipoEquipamento").value = body.tipoEquipamento
        document.getElementById("entradaLab").value = body.entradaLab
        document.getElementById("defeito").value = body.defeito
        document.getElementById("previsaoEntrega").value = body.previsaoEntrega
        document.getElementById("statusConcerto").value = body.statusConcerto
        document.getElementById("observacoes").value = body.observacoes

        document.getElementById("botaoCadastrar").style.display = "none"
        document.getElementById("botaoAtualizar").style.display = "block"
    }
}

async function cadastrarOs() {
    var formulario = document.getElementById("dados")
    var body = new FormData(formulario)

    var response = await fetch("http://localhost:8080/os", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(body))
    })

    if (response.ok) {
        carregarOs()
    } else {
        var body = await response.text()
        alert(body)
    }
}

async function atualizarOs() {
    var formulario = document.getElementById("dados")
    var body = new FormData(formulario)
    var id = document.getElementById("id").value

    var response = await fetch(`http://localhost:8080/os/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(body))
    })

    if (response.ok) {
        limparCampos()
        carregarOs()
    } else {
        var body = await response.text()
        alert(body)
    }
}

function limparCampos() {
    document.getElementById("id").value = null
    document.getElementById("proprietario").value = null
    document.getElementById("tipoEquipamento").value = 0
    document.getElementById("entradaLab").value = null
    document.getElementById("defeito").value = null
    document.getElementById("previsaoEntrega").value = null
    document.getElementById("statusConcerto").value = 0
    document.getElementById("observacoes").value = null

    document.getElementById("botaoCadastrar").style.display = "block"
    document.getElementById("botaoAtualizar").style.display = "none"
}