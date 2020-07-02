function alert_ring(){
		if((document.getElementById('inputEmail').value.length==0) && (document.getElementById('inputPassword').value.length==0))
			alert("enter username and password");
		else if (document.getElementById('inputEmail').value.length==0)
			alert("enter username");
		else if(document.getElementById('inputPassword').value.length==0)
			alert("enter password");
	}