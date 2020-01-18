function newfunction(){
var newelement=document.createElement("li");
var node=document.createTextNode(document.getElementById("input").value);
newelement.appendChild(node);
document.getElementById("Siblings").appendChild(newelement);
document.getElementById("input").value="";
}