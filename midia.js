var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}
exibirfilme()

function cadastrar() {
    var nomeFilme = document.getElementById("sugestoes").value
    var critica = document.getElementById("critica").value
    var imagem = document.getElementById ('imagem').value

    function validarCadastro(nomeFilme, critica){
        if (nomeFilme != '' && critica != '') {
            return true
        } else {
            return false
        }
    }
    var possoCadastrar = validarCadastro(nomeFilme, critica)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }

    var filme = {
        nome: nomeFilme,
        critica: critica,
        imagem: imagem
    }

    
    listaFilmes.push(filme)
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
    alert("Obrigado pela sugestão")
    location.href = "catalago.html"

}
function carregarImg(){
    document.getElementById("img").src = document.getElementById('imagem').value
}

function exibirfilme(){
    document.getElementById('adicionados').innerHTML = ''
    listaFilmes.forEach(item =>{
        document.getElementById('adicionados').innerHTML += `<img src="${item.imagem}" class="filme">`
    })
}