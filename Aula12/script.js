let pessoas = []

function cadastro(){
    let rgm = Number(document.getElementById("rgm").value)
    let nome = document.getElementById("nome").value
    let a2 = Number(document.getElementById("a2").value)
    let projeto = Number(document.getElementById("projeto").value)
    let a1 = Number(document.getElementById("a1").value)

    let ficha = {
        id: rgm,
        name: nome,
        project: projeto,
        A2: a2,
        A1: a1
    }

    if(isNaN(ficha.id) || !ficha.name || isNaN(ficha.project) || isNaN(ficha.A2) || isNaN(ficha.A1)){
        alert("Preencha todos os campos e tente novamente.")
        return
    }else{
        const repetido = pessoas.some(cadastrado => cadastrado.id === ficha.id)
        if(repetido){
            alert("RGM já cadastrado!")
        }else{
            pessoas.push(ficha)
            localStorage.setItem("aluno", JSON.stringify(pessoas))

            alert(`Registro com RGM: ${ficha.id} foi cadastrado com sucesso!`)
        }
    }
}

function listar(){
    let dado = localStorage.getItem("aluno")
    let list = JSON.parse(dado)
    
    for(let i = 0; i <= list.length-1; i++){
        let tabela = document.getElementById("local_tb")

        let espaço = document.createElement("tr")

        let dado1 = document.createElement("td")
        let dado2 = document.createElement("td")
        let dado3 = document.createElement("td")
        let dado4 = document.createElement("td")
        let dado5 = document.createElement("td")

        dado1.innerHTML = list[i].id
        dado2.innerHTML = list[i].name
        dado3.innerHTML = list[i].project
        dado4.innerHTML = list[i].A2
        dado5.innerHTML = list[i].A1
        
        espaço.appendChild(dado1)
        espaço.appendChild(dado2)
        espaço.appendChild(dado3)
        espaço.appendChild(dado4)
        espaço.appendChild(dado5)

        tabela.appendChild(espaço)
    }
}

function excluir(){
    if(localStorage.length > 0){
        let a = confirm("Deseja Excluir os Dados do LocalStorage?")
        if(a == true){
            localStorage.clear()
            
            let tabela = document.getElementById("local_tb")
            tabela.innerHTML = ""
        }else{
            return
        }
    }else{
        alert("Não há dados para excluir!")
    }
}


function autoria(){
    alert(
        "Aurores: \n Alice Bernal, Caio Tavares, Guilherme Silva"
    )
}