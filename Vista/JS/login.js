async function login() {
    var user = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;

  if (user == "" || user == null || pass == "" || pass == null) {
    alert("Todos los espacios deben llenarse");
    return false;
  }else{
    await post(user, pass);
  }  
}

async function post(u, p){
    let response = await fetch('https://pqr-api-rails.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
                password: p,
                email: u
            })
    });

    if (response.ok) {
      var pjson = await response.json();
      if (pjson.error) {
        alert("Usuario o Contraseña incorrectos");
      }else{
        alert("Bienvenido de nuevo " + pjson.user.name);

        probarsesion(pjson.token, pjson.user, pjson);
        window.location="../HTML/misPQR.html";
      }
    } else {
      alert("HTTP-Error: " + response.status);
    }
}

async function probarsesion(t) {

  sessionStorage.setItem("token", t);
  console.log(t);
}