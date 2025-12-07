const aboutMe = {
    name: "Raj",
    age: 21,
    hobby: "Drawing",
    favouriteFood: "Chickenrice",
    favouriteColor: "Yiolet",
    city: "Vellore",
};
 function printAboutMe(details){
     console.log("=== About Me ===");
     console.log("Name:", details.name);
     console.log("age:", details.age);
     console.log("hobby:", details.hobby);
     console.log("favouriteFood:", details.favouriteFood);
     console.log("favouriteColor:", details.favouriteColor);
     console.log("city:", details.city);
     console.log("=====================");

 }

 printAboutMe(aboutMe);