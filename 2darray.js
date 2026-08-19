let students =
[
    ["kumkum", "vishwakarma","btech","cse aiml"],
    ["kashish","singh","btech","cse aiml"]

];
console.log(students);
const student ={
    id:101,
    name:"kumum",
    course :"btect"
};
console.log(student)

let user =[

    {
        id:1,
        name:"kumkum"
    },
    {
        id :2,
        name:"kakul"
    }
];
console.log(user);
const employee ={
    id:101,
    name:"kumkum",
    department:"cse aiml",
    display:function(){
        console.log ("id:",this.id)
        console.log("name:",this.name)
    }
}
const studentData ={

    id:101, 
      course:"btech",
      age:20,
      display:function(){  
studentData.course="B.tech";
console.log(studentData);
delete studentData.age;
      }
    };
