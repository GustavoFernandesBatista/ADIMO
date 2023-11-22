function checkLogin(){

    var usuario = document.getElementById('text').value;
    var senha = document.getElementById('password').value

    if(usuario == "Mario" && senha == "123"){
        window.open("home.html")    
    }

    if(usuario == "Gustavo" && senha == "123"){        
        window.open("homeAtendimento.html")
    }

}

