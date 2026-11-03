let sala = []
let aluno = {
    nome,
    rgm,
    a2,
    ex,
    projeto,
    a1
}

function cadastrar(){
    let ficha = {
        name: document.getElementById("nome").value,
        id: document.getElementById("rgm").value,
        pp: Number(document.getElementById("a2").value),
        excs: Number(document.getElementById("ex").value),
        project: Number(document.getElementById("projeto").value),
        pr: Number(document.getElementById("a1").value)
    }

    if(!ficha.name || !ficha.id || isNaN(ficha.pp) || isNaN(ficha.excs) || isNaN(ficha.project) || isNaN(ficha.pr)){
        alert("Preencha todos os campos e tente novamente.")
        return
    }else{
        const repetido = sala.some(cadastrado => cadastrado.id === ficha.id)
        if(repetido){
            alert("RGM já cadastrado!")
        }else{
            sala.push(ficha)
            alert(`Registro com RGM: ${ficha.id} foi cadastrado com sucesso!`)
        }
    }
}

function lista(){
    let espaço = document.getElementById("resultado")
    espaço.innerHTML = ""
    espaço.style.display = "flex"
    espaço.style.flexDirection = "row"

    for(let i = 0; i < sala.length; i++){
        let title = document.createElement("h2")
        title.innerHTML = "Lista de todos os alunos:"

        let aln = document.createElement("div")
        aln.className = "aln"
        aln.style.flexDirection = "column"
        
        let alnName = document.createElement("p")
        alnName.innerHTML = `Nome: ${sala[i].name}`
        
        let alnId = document.createElement("p")
        alnId.innerHTML = `RGM: ${sala[i].id}`

        let alnA2 = document.createElement("p")
        alnA2.innerHTML = `Parcial: ${sala[i].pp}`

        let alnEXS = document.createElement("p")
        alnEXS.innerHTML = `Exercícios: ${sala[i].excs}`

        let alnPrjt = document.createElement("p")
        alnPrjt.innerHTML = `Projeto: ${sala[i].project}`

        let alnA1 = document.createElement("p")
        alnA1.innerHTML = `Regimental: ${sala[i].pr}`

        let notas = document.createElement("p")
        notas.innerHTML = "Notas:"
        

        aln.appendChild(alnName)
        aln.appendChild(alnId)
        aln.appendChild(notas)
        aln.appendChild(alnA2)
        aln.appendChild(alnEXS)
        aln.appendChild(alnPrjt)
        aln.appendChild(alnA1)

        if(!document.querySelector("h2")){
            espaço.appendChild(title)
            espaço.appendChild(aln)
        }else{
            espaço.appendChild(aln)
        }
    }
}