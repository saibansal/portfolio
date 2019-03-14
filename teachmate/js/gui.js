// JavaScript Document

$(document).ready(function() {
	
});

function checkEmail(email) {
	var str = new String(email);
	var isOK = true;
	var rExp = /[!\"£$%\^&*()-+=<>,\'#?\\|¬`\/\[\]]/
	
	if( rExp.test(str) )
		isOK = false;
	if( str.indexOf('.') == -1 || str.indexOf('@') == -1 )
		isOK = false;
	if( str.slice(str.lastIndexOf('.')+1,str.length).length < 2 )
		isOK = false;
	if( str.slice(0,str.indexOf('@')).length < 1 )
		isOK = false;
	if( str.slice(str.indexOf('@')+1,str.lastIndexOf('.')).length < 1 )
		isOK = false;
		
	return isOK;
}