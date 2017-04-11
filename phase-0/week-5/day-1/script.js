document.getElementById("fill-me").innerHTML = "HALO!";
var para = document.getElementsByClassName("change-all-of-me");
for(var i = 0 ; i<para.length ; i++)
{
	var currPara = para[i];
    currPara.innerHTML = "HALO JUGA!";
    
}

var h2Contents = document.getElementsByTagName("h2");
for(var i = 0 ; i<h2Contents.length ; i++)
{
	var currH2Contents = h2Contents[i];
    currH2Contents.innerHTML = "Apa Kabar!";
    
}