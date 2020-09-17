var uwu = sessionStorage.getItem("token");
var awa = sessionStorage.getItem("request");

console.log(uwu);
console.log(awa);

async function loadPQRinfo(){
    let rjson = JSON.parse(awa);
    let tipo = rjson.request_type;
    let estado = rjson.request_state;

    document.getElementById("asunto").innerHTML = rjson.subject;

    if (estado == "in_progress") {
    	document.getElementById("estado").innerHTML = "En progreso";
	}else if(estado == "settled") {
		document.getElementById("estado").innerHTML = "Radicado";
	}else if(estado == "solved") {
		document.getElementById("estado").innerHTML = "Resuelto";
	}else if(estado == "closed") {
		document.getElementById("estado").innerHTML = "Cerrado";
	}

	if(tipo == "request") {
		document.getElementById("tSolicitud").innerHTML = "Solicitud";
	}else if(tipo == "complain") {
		document.getElementById("tSolicitud").innerHTML = "Queja";
	}else if(tipo == "claim") {
		document.getElementById("tSolicitud").innerHTML = "Reclamo";
	}
    document.getElementById("descripcion").innerHTML = rjson.description;

    let response = await fetch("https://pqr-api-rails.herokuapp.com/requests/get_request/"+rjson.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': uwu
      }});
    
    if (response.ok) {
      var json = await response.json();    
      aux = json.request;
      console.log(aux);
      var cad = "";
      for (var i = 0;i > aux.notes.length; i++) {
      	if (aux[i].user_id == rjson.user_id) {
      		cad+= "<p>Tu</p><br><p>"+aux.notes[i].description+"</p>";
      	}else{
      		cad+= "<p></p>Admin<br><p>"+aux.notes[i].description+"</p>";
      	}
      }
   }else {
      alert("HTTP-Error: " + response.status);
    }

}

//sessionStorage.removeItem("request");

async function addNote(){
	let nota = document.getElementById("Cnota").value;
	console.log(nota);
	if (nota == "") {
		alert("Todos los espacios deben llenarse");
		return false;
	}else{
		var result = postNota(nota);
	}
}

async function postNota(n){
	let request = JSON.parse(awa);
	let reqID = request.id;
	let response = await fetch('https://pqr-api-rails.herokuapp.com/notes/create/'+reqID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': uwu
      },
      body: JSON.stringify({
    		description: n,
        })
    });
}

var modal = document.getElementById("popup");

var btn = document.getElementById("updateSolicitud");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}