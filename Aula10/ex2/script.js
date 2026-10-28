function matriz(){
    let coluna = Number(document.getElementById("coluna").value)
    let linha = Number(document.getElementById("linha").value)

    let espaço = document.createElement("resultado")
    let tabela = document.getElementById("tb_local")

    let i, j;

    for(i = 1; i <= linha; i++){
        let tb_linha = document.createElement("tr")
        for(j = 1; j <= coluna; j++){
            let v1 = document.createElement("td")
            let v2 = document.createElement("td")

            v1.innerHTML = `(${i},`
            v2.innerHTML = `${j})`

            if(j % 2 == 0){
                v1.style.backgroundColor = "yellow"
                v2.style.backgroundColor = "yellow"
            }else{
                v1.style.backgroundColor = "green"
                v2.style.backgroundColor = "green"
            }

            tb_linha.appendChild(v1)
            tb_linha.appendChild(v2)

            tabela.appendChild(tb_linha)
        }
    }
}