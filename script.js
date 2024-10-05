var object1 = {
sender : "virat",
reciever : "C.Ronaldo",
message : "      football or cricket  ?", 

}
var newobject = JSON.stringify(object1)

var end = JSON.parse(newobject)
document.write(end.sender + ":" + end.message)


async function add(a,b) {
    var response = await a+b;
    print(response)


}

function print(anynumber) {
document.getElementById("result").innerHTML = anynumber;}

add(20,50);

