function markspercentage(maths,english ,science) {
    return (maths+english+science);
}
function percentage(markspercentage){
    return( markspercentage/300)*100
}
var total=markspercentage(90,80,70);
var percent=percentage(total);
console.log("Total marks: ",total);
console.log("Percentage: ",percentage(total)+"%");