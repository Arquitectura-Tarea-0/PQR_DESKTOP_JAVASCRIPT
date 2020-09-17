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
    
    charge(aux);
}

function charge(a){
  var owo = "";
    //recorrer el json
    for (var i = 0; i < a.length; i++) {
      owo += "<tr><td>" + a[i].subject + "</td> <td>" + traducir(a[i].request_type) + "</td> <td>" + traducir(a[i].request_state) + "</td> <td>" + traducir(a[i].created_at) + "</td><td><button id="+ i +" class='btn btn-dark'onClick='subir(this.id)'><i class='fa fa-eye' aria-hidden='true'></i></button></td></tr>";
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

function filtrar(){
  var fecha = document.getElementById("date").value;
  var estado = document.getElementById("state").value;
  var tipo = document.getElementById("type").value;
  
  if (fecha != "" || estado != "" || tipo != "") {
    
    var str = "<button class='btn btn-danger' onclick='erase()''>Reiniciar filtros<i class='fa fa-window-close' aria-hidden='true'></i></button>";
    document.getElementById("celFiltro").innerHTML = str;
    str = "<td>"+ tipo + "</td> <td>"+ estado + "</td><td></td><td>"+fecha+"</td>";
    document.getElementById("filtros").innerHTML = str;
    clear();
    filtrar2(fecha, estado, tipo);
  }
}

function filtrar2(f, e, t){
    let arr = aux;

    if (t != "") {
      arr = arr.filter(function checkType(request){
        return request.request_type == t;
      });
    }
    if (e != "") {
      arr = arr.filter(function checkState(request){
        return request.request_state == e;
      });
    }
    if (f != "") {
      arr = arr.filter(function checkDate(request){
        return traducir(request.created_at) == f;
      });
    }

    charge(arr);
}

function erase(){
   var str = "<button class='btn btn-secondary' onclick='filtrar()''>Filtrar<i class='fa fa-filter' aria-hidden='true'></i></button>";
   document.getElementById("celFiltro").innerHTML = str;
   document.getElementById("filtros").innerHTML = "";
   get();
   clear();
}


function clear(){
  document.getElementById("date").value = "";
  document.getElementById("state").value = "";
  document.getElementById("type").value = "";
}

function subir(id){
  sessionStorage.setItem("request", JSON.stringify(aux[id]));
  window.location="../HTML/solicitud.html"; 
}