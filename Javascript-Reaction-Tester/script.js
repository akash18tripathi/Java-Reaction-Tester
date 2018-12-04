var start = new Date().getTime();

function appear(){
	
	var top = Math.random()*500;
	var left = Math.random()*700;
	var width = Math.random()*400;
	var borderRadius = Math.random()*100;
	var colorCode = "0123456789ABCDEF";
	var color = "#";
	document.getElementById("shapes").style.top=top+"px";
	document.getElementById("shapes").style.left=left+"px";
	document.getElementById("shapes").style.width=width+"px";

		for(var i=0;i<6;i++){
			
			color+= colorCode[Math.floor(Math.random()*16)];
			
		}
	document.getElementById("shapes").style.backgroundColor=color;
	document.getElementById("shapes").style.borderRadius=borderRadius+"%";
	document.getElementById("shapes").style.display="block";
	start = new Date().getTime();
	
}
	setTimeout(appear,500);

function disappear(){
	document.getElementById("shapes").style.display="none";
	var end = new Date().getTime();
	var timeCount = (end - start)/1000 ;
	document.getElementById("timeCount").innerHTML= timeCount+"s";
	setTimeout(appear,500);
}