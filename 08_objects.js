let userKey = Symbol("01")     // Symbol DataType

let userData = {
    [userKey]: "01",                     // Symbol call in Object
    name: "Muhammad Ilyas",
    age: 21,
    email: "muhammadilyas@gmail.com",
    isLoggedIn: false,
    departement: "Informatin technology (IT)",
    "unversity name": "Karakuram International University (KIU)",
    subjects: ["Computer", "Oops", "Programming", "IT"]
}
// console.log(userData);
// console.log(userData.name);
// console.log(userData["age"]);
// console.log(userData["unversity name"])
// console.log(userData[userKey]);


// let obj1 = { 1: "a", 2: "b", }
// let obj2 = { 3: "a", 4: "b", }
// let obj3 = { 5: "a", 6: "b", }

// let allObj = {...obj1, ...obj2, ...obj3}

// console.log(allObj);

let course = {
    id: 1,
    instructorName: "Ilyas",
    courseName: "Block Chain Development",
    classTimming: "07:00"
}
// console.log(course.instructorName);         // Simple Method to Call


// ********** Destructure the object keys for easily calling ***********

const {instructorName : instructor} = course;          // After use : you can rename the key Also
const {courseName} = course;
// console.log(instructor);                   // Advances Method to Call
// console.log(courseName);                   // Advances Method to Call


