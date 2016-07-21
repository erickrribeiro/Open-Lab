
onload =  function(e){
	var html = document.querySelectorAll("html");	
	
	for (var i=0;  i < html.length; i++) {
		html[i].addEventListener("click", listenClick);  				
		//html[i].addEventListener("mouseover", listemMouseOver);
		//html[i].addEventListener("mouseout", listemMouseOut);
	}	
}

function getCookie(cname) {
    var name = cname + "=";

    var ca = document.cookie.split(';');
    console.log(ca);
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            //console.log(c);
            return c.substring(name.length,c.length);
        }
    }
  return "";
}

function listenClick(e){
//	console.log("-----------------");			
	//console.log(e);			
    //console.log("x: "+e.screenX+" y: "+e.screenY);
	//console.log(e.type);			
	//console.log("target id: " +e.target.id);
    //console.log("target class: " +e.target.className);
	//console.log(e.target.localName);
    //console.log(e.timeStamp);	    
	//console.log(e.which);
	idTela = getCookie("screen");
	//console.log("oi",idTela);	
    var timestamp = new Date().getTime();
  //console.log("DataCollector timestamp: "+timestamp);

    $.post("http://localhost:5000/storage/1",
    {
      idUser: "2",
      timeStamp: timestamp,
      tipo: e.type,
      tag: e.target.localName,
      x:e.screenX,
      y:e.screenY,
      id: idTela,
    },
    function(data, status){
       // alert("Data: " + data + "\nStatus: " + status);
    });    
}

function listemMouseOver(e){
	console.log(e.target);
}

function listemMouseOut(e){
	console.log(e.target);
}
