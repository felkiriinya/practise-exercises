var scores= function(grades){
    if(grades>80){
        alert("Your grade is A")
    }
    else if(grades>60&&grades<79){
        alert("Your grade is B")
    }
    else if(grades>40&&grades<59){
        alert("Your grade is C")
    }
    else if(grades>20&&grades<39){
        alert("Your grade is D")
    }
    else{
        alert("Your grade is E")
    }
};
var enter=prompt("Enter your scores to view your grade");
scores(enter);