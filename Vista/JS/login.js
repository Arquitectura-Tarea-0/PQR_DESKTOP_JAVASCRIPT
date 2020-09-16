async function login() {
    var user = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;

  if (user == "" || user == null || pass == "" || pass == null) {
    alert("Todos los espacios deben llenarse");
    return false;
  }else{
    var useruwu = await post(user, pass);
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
      alert("Bienvenido de nuevo " + pjson.user.name);  
    } else {
      alert("HTTP-Error: " + response.status);
    }
    console.log(pjson);

    console.log("Valido");
}