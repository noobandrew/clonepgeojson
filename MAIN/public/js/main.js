const inputs = document.querySelectorAll(".input");

function addcl(){
  const parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl(){
  const parent = this.parentNode.parentNode;
  if(this.value == ""){
    parent.classList.remove("focus");
  }
}


function logar(){
		
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;
  
  if(login == "admin" && senha == "admin"){
    alert('Sucesso');
    location.href = "index.html";
  } else {
    alert('Usuário ou senha incorretos');
    
  }

}