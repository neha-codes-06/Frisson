
const people=[
    {
        name:"Neha",
        age:20
    },
    {
        name:"preeti",
        age:10
    },
    {
        name:"pinki",
        age:11
    },
    {
        name:"Neha",
        id:1,
        surname:"sundriyal"
    },
    {
        name:"preeti",
        id:2
    },
    {
        name:"pinki",
        id:3
    },
    
];
const peopleObj={}
for(let i=0;i<people.length;i++){
    const person=people[i];
    // console.log(person)
    peopleObj[person.name]={...peopleObj[person.name],...person};
}
console.log(peopleObj)


    










console.log(peopleObj)//using spread operator
////Neha: { name: 'Neha', age: 20, id: 1 },
  //preeti: { name: 'preeti', age: 10, id: 2 },
  //pinki: { name: 'pinki', age: 11, id: 3 }

  