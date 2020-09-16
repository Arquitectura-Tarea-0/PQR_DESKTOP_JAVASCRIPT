var uwu = sessionStorage.getItem("token");
var aux;
get();

async function get(){
    let response = await fetch("https://pqr-api-rails.herokuapp.com/requests/user_requests", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': uwu
      }});
    
    if (response.ok) {
      var json = await response.json();    
      aux = json.request;
    } else {
      alert("HTTP-Error: " + response.status);
    }
    console.log(aux);
    var owo = "";
    //recorrer el json
    for (var i = 0; i < aux.length; i++) {
    	owo += "<tr><td>" + aux[i].subject + "</td> <td>" + traducir(aux[i].request_type) + "</td> <td>" + traducir(aux[i].request_state) + "</td> <td>" + traducir(aux[i].created_at) + "</td><td><button id="+ i  +" class='btn btn-dark'onClick='subir(this.id)'><i class='fa fa-eye' aria-hidden='true'></i></button></td></tr>";
    }
   

    document.getElementById("tbody").innerHTML = owo;
}

function traducir(s){
	if (s == "in_progress") {
		return "En proceso";
	}else if(s == "settled") {
		return "Radicado";
	}else if(s == "solved") {
		return "Resuelto";
	}else if(s == "closed") {
		return "Cerrado";
	}else if(s == "request") {
		return "Solicitud";
	}else if(s == "complain") {
		return "Queja";
	}else if(s == "claim") {
		return "Reclamo";
	}else{
		var d = new Date(s);
		var day = d.getDate();
		if (day < 10) { 
            day = "0" + day; 
        } 
        var month = d.getMonth() + 1; 
        if (month < 10) { 
            month = "0" + month; 
        } 
        var year = d.getFullYear(); 
        return day + "/" + month + "/" + year; 
	}
}

function subir(id){
	sessionStorage.setItem("request", JSON.stringify(aux[id]));
	window.location="../HTML/solicitud.html"; 
}
