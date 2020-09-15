async function post(){

    let response = await fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
                parameter: "value",
                ...
    });

    if (response.ok) {
      var pjson = await response.json();    
      alert("lo que quieran poner uwu");  
    } else {
      alert("HTTP-Error: " + response.status);
    }
}

async function get(){
    let response = await fetch("url");
    
    if (response.ok) {
      var json = await response.json();  
      alert("lo que quieran poner uwu");     
    } else {
      alert("HTTP-Error: " + response.status);
    }

    var l = json.users.lenght;
    //recorrer el json
    for (var i = l - 1; i >= 0; i--) {
        if(json.users[i].parameter == comparativo){

        }
    }
}
