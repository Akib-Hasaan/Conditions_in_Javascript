// (1) Individual conditions for individual things

var marks = "Ghorar Dim"
if (marks>=0 && marks<30){
    console.log("You got VERY Bad Grades ;-;");
}
else if (marks>=30 && marks<50){
    console.log("You got Bad Grades :(");
}
else if (marks>=50 && marks <=70){
    console.log("You got Okay-Ish Grades (-_-)");
}
else if (marks>70 && marks<85){
    console.log("You got Good Grades :)");
}
else if (marks>=85 && marks<=99){
    console.log("You got AMAZING Grades :D");
}
else if(marks==100){
    console.log("You got EXCELLENT Grades (O-O)");
}
else {
    console.log("Just what did you get? (o_o')"); 
}


// (2) Multiple conditions for one thing

let personIdentity = "Nijeo Jane Na"
let personWearing = "Lungi"

if (personIdentity=="Employee"){
    if(personWearing=="ID Card"){
        console.log("Thank you for your cooperation.Please Enter.");
    }
}
else{
    console.log("Sir/Ma'am, you will not be allowed entry");
}
