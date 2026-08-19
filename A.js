console.log("=======Variables=======")
var text="KUMKUM VISHWAKARMA";
console.log(text);
console.log("=======IF else=======")
var a=20;
var b=40;
if(a>b){
    console.log("a is greater ,value of a: =" ,a);
}
else{
    console.log("b is greater, value of b: =" ,b);
}
console.log("=======FUNCTION=======");
function abes() {
    console.log("welcome to student");
    console.log("welcome to Node js");
}
abes();
console.log("=======FUNCTION with Parameters=======");
function greet(fname,lastname) {
    console.log("Hello, " , fname , lastname);
}
greet("KUMKUM", "VISHWAKARMA");
console.log("=======function  Return =======");
function add(a,b) {
    return a+b;
}
var result=add(10,20);
console.log("sum=",result);
console.log("=======Default Arguments=======");
function fullname(fname = "ABES", lastname = "ENGINEERING COLLEGE") {
    return fname + " " + lastname;
}
console.log(fullname("KUMKUM", "VISHWAKARMA"));
console.log(fullname());
console.log("=======percentages=======");
function totalmarks(math,science,english    )   {
    return math+science+english;
}
function percentage(totalmarks) {
    return (totalmarks/300)*100;
}   
var total=totalmarks(90,80,70);
var percent=percentage(total);
console.log("Total marks: ",total);
console.log("Percentage: ",percentage(total)+"%");
