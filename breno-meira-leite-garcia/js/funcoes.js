/* Lê o XML */	
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudo");

/* Exibe o conteúdo */
function funcaoConteudo(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='animacaosobre'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaotitulosobre(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='pprojeto'>" + x[i].getElementsByTagName("titulosobre")[0].childNodes[0].nodeValue + "</h1>");}
}
function funcaoConteudosobre1(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h4>" + x[i].getElementsByTagName("corposobre1")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaoConteudosobre2(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h4>" + x[i].getElementsByTagName("corposobre2")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaoapp(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 id='app'>" + x[i].getElementsByTagName("tituloapp")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4>" + x[i].getElementsByTagName("corpoapp")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaomaquete(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1 >" + x[i].getElementsByTagName("titulomaquete")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4>" + x[i].getElementsByTagName("corpomaquete")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcaoarduino(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1>" + x[i].getElementsByTagName("tituloarduino")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4>" + x[i].getElementsByTagName("corpoarduino")[0].childNodes[0].nodeValue + "</h4>");}
}
function funcao(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<h1>" + x[i].getElementsByTagName("tituloarduino")[0].childNodes[0].nodeValue + "</h1>" +			
		"<h4>" + x[i].getElementsByTagName("corpoarduino")[0].childNodes[0].nodeValue + "</h4>");}
}