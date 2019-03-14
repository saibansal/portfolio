// JavaScript Document
function pannel(links){
    if (links == 1) {
		document.getElementById("first").className = "active";
		document.getElementById("second").className = "";
		document.getElementById("third").className = "";
		document.getElementById("fourth").className = "";
		document.getElementById("veduca").style.display="block";
		document.getElementById("ondalocal").style.display="none";
		document.getElementById("startup").style.display="none";
		document.getElementById("janamesa").style.display="none";
		document.getElementById("v1").style.display="block";
		document.getElementById("v2").style.display="none";
		document.getElementById("v3").style.display="none";
		document.getElementById("v4").style.display="none";
    }
	if (links == 2) {
       document.getElementById("first").className = "";
		document.getElementById("second").className = "active";
		document.getElementById("third").className = "";
		document.getElementById("fourth").className = "";
		document.getElementById("veduca").style.display="none";
		document.getElementById("ondalocal").style.display="block";
		document.getElementById("startup").style.display="none";
		document.getElementById("janamesa").style.display="none";
		document.getElementById("v1").style.display="none";
		document.getElementById("v2").style.display="block";
		document.getElementById("v3").style.display="none";
		document.getElementById("v4").style.display="none";
    }
	if (links == 3) {
        document.getElementById("first").className = "";
		document.getElementById("second").className = "";
		document.getElementById("third").className = "active";
		document.getElementById("fourth").className = "";
		document.getElementById("veduca").style.display="none";
		document.getElementById("ondalocal").style.display="none";
		document.getElementById("startup").style.display="block";
		document.getElementById("janamesa").style.display="none";
		document.getElementById("v1").style.display="none";
		document.getElementById("v2").style.display="none";
		document.getElementById("v3").style.display="block";
		document.getElementById("v4").style.display="none";
    }
	if (links == 4) {
        document.getElementById("first").className = "";
		document.getElementById("second").className = "";
		document.getElementById("third").className = "";
		document.getElementById("fourth").className = "active";
		document.getElementById("veduca").style.display="none";
		document.getElementById("ondalocal").style.display="none";
		document.getElementById("startup").style.display="none";
		document.getElementById("janamesa").style.display="block";
		document.getElementById("v1").style.display="none";
		document.getElementById("v2").style.display="none";
		document.getElementById("v3").style.display="none";
		document.getElementById("v4").style.display="block";
    }
}