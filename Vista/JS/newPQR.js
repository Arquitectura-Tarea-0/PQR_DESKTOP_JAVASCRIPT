var user = sessionStorage.getItem("token");

async function regPQR() {
    let subject = document.getElementById("asunto").value;
    let request_type = document.getElementById("tSolicitud").value;
    alert(request_type);
    let description = document.getElementById("cuerpo").value;

  if (subject == "" || subject == null || description == "" || description == null) {
    alert("Todos los espacios deben llenarse");
    return false;
  }else{
    var request = postPQR(subject, request_type, description);
  }  
}

async function postPQR(s, r, d){

    let response = await fetch('https://pqr-api-rails.herokuapp.com/requests/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': user
      },
      body: JSON.stringify({
                user_id: 8,
                request_type: r,
                request_state: 'in_progress',
                description: d,
                subject: s
            })
    });
}