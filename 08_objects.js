let userKey = Symbol("01")     // Symbol DataType

let userData = {
    [userKey]: "01",
    name: "Muhammad Ilyas",
    age: 21,
    email: "muhammadilyas@gmail.com",
    isLoggedIn: false,
    departement: "Informatin technology (IT)",
    "unversity name": "Karakuram International University (KIU)",
}
console.log(userData.name);
console.log(userData["age"]);
console.log(userData["unversity name"])
console.log(userData[userKey]);