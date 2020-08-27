var temperature =10;
var raining =true;
var storms=true;

if (temperature<0){
console.log("Brr! Don't freeze out there!")
}
else if(temperature<15||!raining){
    console.log("Don't forger a jacket!");
}
else if(temperature<25 || raining===true ){
    console.log("Have a nice day :)");
}
else{
    console.log("Keep cool today!");
}