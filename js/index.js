var gal=function(gallons){
    return gallons*3.75;
}
var litre=function(litres){
    return litres/3.785;
}
var  cg=parseFloat(prompt("Enter your liquid weigh measurements in litres to get the gallons you require")
);
var results1=gal(cg).toFixed(2);
alert("You require "+ results1+ " gallons");
var cl=parseFloat(prompt("Enter your measurements in gallons to get them in litres "));
var results =litre(cl).toFixed(2);
alert("You require " +results+" litres" );
