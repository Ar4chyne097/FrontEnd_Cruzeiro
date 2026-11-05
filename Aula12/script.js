function cadastro(){
    let rgm = document.getElementById("rgm").value
    let nome = document.getElementById("nome").value
    let a2 = document.getElementById("a2").value
    let projeto = document.getElementById("projeto").value
    let a1 = document.getElementById("a1").value

    localStorage.setItem("rgm", rgm)
    localStorage.setItem("nome", nome)
    localStorage.setItem("a2", a2)
    localStorage.setItem("projeto", projeto)
    localStorage.setItem("a1", a1)
}

function autoria(){
    alert(
        "Aurores: \n Alice Bernal, Caio Tavares, Guilherme Silva"
    )
}