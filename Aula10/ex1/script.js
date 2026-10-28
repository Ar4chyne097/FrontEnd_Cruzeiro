let nomes = []

function cidade(){
    let tela =  document.getElementById("resultado")
    let tabela = document.getElementById("local_tb")
    let ciudad = document.getElementById("txt_cidade").value

    if(ciudad != ""){
        nomes.push(ciudad)
        let espaço = document.createElement("tr")
        let dado1 = document.createElement("td")
        let dado2 = document.createElement("td")

        dado1.innerHTML = nomes.length
        dado2.innerHTML = nomes[(nomes.length)-1]

        espaço.appendChild(dado1)
        espaço.appendChild(dado2)

        tabela.appendChild(espaço)
    }else{
        alert("ERRO! É necessário escrever algo no campo! Tente novamente.")
    }
}