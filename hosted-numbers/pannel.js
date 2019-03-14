// JavaScript Document
function mobile(links){
    if (links == 1) {
        document.getElementById('mobile').style.display = 'block';
        document.getElementById('DTH').style.display = 'none';
        document.getElementById('DataCard').style.display = 'none';
		document.getElementById('Mcoming').style.display = 'none';
		
        document.getElementById("mobile1").className = "active";
        document.getElementById("dth").className = "";
        document.getElementById("dcard").className = "";
		document.getElementById("dcard1").className = "";
		
		document.getElementById("mobileSpan").style.display = "block";
		document.getElementById("DTHSpan").style.display = "none";
		document.getElementById("DataCardSpan").style.display = "none";
		document.getElementById("McomingSpan").style.display = "none";
    }
    else if (links == 2) {
        document.getElementById('mobile').style.display = 'none';
        document.getElementById('DTH').style.display = 'block';
        document.getElementById('DataCard').style.display = 'none';
		document.getElementById('Mcoming').style.display = 'none';
				
        document.getElementById("mobile1").className = "";
        document.getElementById("dth").className = "active";
		document.getElementById("dcard").className = "";
		document.getElementById("dcard1").className = "";
		
		document.getElementById("mobileSpan").style.display = "none";
		document.getElementById("DTHSpan").style.display = "block";
		document.getElementById("DataCardSpan").style.display = "none";
		document.getElementById("McomingSpan").style.display = "none";		
    }
    else if (links == 3) {
        document.getElementById('mobile').style.display = 'none';
        document.getElementById('DTH').style.display = 'none';
        document.getElementById('DataCard').style.display = 'block';
		document.getElementById('Mcoming').style.display = 'none';
		
        document.getElementById("mobile1").className = "";
        document.getElementById("dth").className = "";
        document.getElementById("dcard").className = "active";
		document.getElementById("dcard1").className = "";
		
		document.getElementById("mobileSpan").style.display = "none";
		document.getElementById("DTHSpan").style.display = "none";
		document.getElementById("DataCardSpan").style.display = "block";
		document.getElementById("McomingSpan").style.display = "none";
    }
	else if (links == 4) {
        document.getElementById('mobile').style.display = 'none';
        document.getElementById('DTH').style.display = 'none';
        document.getElementById('DataCard').style.display = 'none';
		document.getElementById('Mcoming').style.display = 'block';
		
        document.getElementById("mobile1").className = "";
        document.getElementById("dth").className = "";
        document.getElementById("dcard").className = "";
		document.getElementById("dcard1").className = "active";
		
		document.getElementById("mobileSpan").style.display = "none";
		document.getElementById("DTHSpan").style.display = "none";
		document.getElementById("DataCardSpan").style.display = "none";
		document.getElementById("McomingSpan").style.display = "block";
    }
    if (links == 5) {
     document.getElementById('tab-cont1').style.display = 'block';
     document.getElementById('tab-cont2').style.display = 'none';
	 document.getElementById('tab-nav1').className = "active c1";
	 document.getElementById('tab-nav2').className = "c2";
    }
	else if (links == 6) {
     document.getElementById('tab-cont1').style.display = 'none';
     document.getElementById('tab-cont2').style.display = 'block';
	 document.getElementById('tab-nav1').className = "c3";
	 document.getElementById('tab-nav2').className = "active c4";
   }
}
