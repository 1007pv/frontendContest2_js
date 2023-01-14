function addEmployee(){
document.getElementById("showAlert").innerHTML = 
}


var myArr =[
    {id:1,name:"jack",profession:"developer",age:20},
    {id:2,name:"john",profession:"admin",age:28}
]
function addEmployee(){
    var temp, item, a;
    temp = document.getElementsByTagName("th")[0];
    item=temp.content.querySelector("th");

    for (i = 0; i < myArr.length; i++) {
        a = document.importNode(item, true);
        a.textContent += myArr[i];
        document.body.appendChild(a);
      }
}
