// 8. Immutable Update
// const user = {
//   name:"Neha",
//   address:{city:"Delhi"}
// };
            //Object, key, value
// updateCity(user, key, "Mumbai"); MAKE A FUNCTION WITH THESE PARAMS

let user={
    name:"neha",
    address:{
        city:"Delhi"
    }
}
let value="Mumbai"


// user["address"]["city"]="Mumbai"
// console.log(user)
function objectUpdate(user,value){

    user = { ...user,address: {...user.address,city: value
  }

}
return user

}
console.log(objectUpdate(user,value))