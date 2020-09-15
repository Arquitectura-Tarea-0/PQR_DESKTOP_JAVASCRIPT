async function login() {
    var user = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;

  if (user == "" || user == null || pass == "" || pass == null) {
    alert("Todos los espacios deben llenarse");
    return false;
  }else{
    var useruwu = post(user, pass);
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
}

async function get(){
    let response = await fetch("https://pqr-api-rails.herokuapp.com/users");
    
    if (response.ok) {
      var json = await response.json();      
    } else {
      alert("HTTP-Error: " + response.status);
    }
    var l = json.users.lenght;
    for (var i = l - 1; i >= 0; i--) {
        if(json.users[i].email == user && json.users[i].password_digest == user){
            //redirigir a mis PQR
        }
    }
}
