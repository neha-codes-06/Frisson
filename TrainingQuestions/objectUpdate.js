// 8. Immutable Update
// const user = {
//   name:"Neha",
//   address:{city:"Delhi"}
// };

// updateCity(user, "Mumbai");

const user={
    name:"neha",
    address:{
        city:"Delhi"
    }
}
user["address"]["city"]="Mumbai"
console.log(user)