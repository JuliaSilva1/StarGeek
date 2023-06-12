var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (listaCadastro == null) {
    listaCadastro = []
}

function cadastrar() {
    var nome = document.getElementById("nome").value
    var sobrenome = document.getElementById("sobrenome").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value


    var cadastro = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha
    }
    listaCadastro.push(cadastro)
    localStorage.setItem('bdcadastro', JSON.stringify(listaCadastro))
    alert('cadastro feito com sucesso')
    location.href="login.html"
}
