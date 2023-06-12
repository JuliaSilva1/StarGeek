var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (listaCadastro == null){
    listaCadastro = []
}


function entrar(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    function validarCadastro(email, senha){
        if (email != '' && senha != '') {
            return true
        } else {
            return false
        }
    }
    var possoCadastrar = validarCadastro(email, senha)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    var encontrou = false
    listaCadastro.forEach (item =>{
        if(email == item.email && senha == item.senha){
            location.href="perfil.html"
            encontrou = true
        }
    })

    if (encontrou == false)
        alert('Senha ou usuário incorreto')
    
}