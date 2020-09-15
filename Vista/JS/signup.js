async function signup() {
    let name = document.getElementById("name").value;
    let user = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;

  if (name == "" || name == null || user == "" || user == null || pass == "" || pass == null) {
    alert("Todos los espacios deben llenarse");
    return false;
  }else{
    var useruwu = post(name, user, pass);
  }  
}

async function post(n, u, p){

    let response = await fetch('https://pqr-api-rails.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
                name: n,
                password: p,
                email: u
            })
    });

    if (response.ok) {
      var pjson = await response.json();    
      alert("Usuario registrado con exito");  
    } else {
      alert("HTTP-Error: " + response.status);
    }
}