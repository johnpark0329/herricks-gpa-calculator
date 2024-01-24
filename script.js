// Declaring class name variables.
let class1;
let class2;
let class3;
let class4;
let class5;
let class6;
let class7;
let class8;

// Declaring grade letter variables.
let gradeClass1;
let gradeClass2;
let gradeClass3;
let gradeClass4;
let gradeClass5;
let gradeClass6;
let gradeClass7;
let gradeClass8;

// Declaring weight variables.
let weightClass1;
let weightClass2;
let weightClass3;
let weightClass4;
let weightClass5;
let weightClass6;
let weightClass7;
let weightClass8;

document.getElementById("submit").onclick = function(){
    class1 = document.getElementById("class1").value;
    class2 = document.getElementById("class2").value;
    class3 = document.getElementById("class3").value;
    class4 = document.getElementById("class4").value;
    class5 = document.getElementById("class5").value;
    class6 = document.getElementById("class6").value;
    class7 = document.getElementById("class7").value;
    class8 = document.getElementById("class8").value;

    gradeClass1 = document.getElementById("gradeClass1").value;
    gradeClass2 = document.getElementById("gradeClass2").value;
    gradeClass3 = document.getElementById("gradeClass3").value;
    gradeClass4 = document.getElementById("gradeClass4").value;
    gradeClass5 = document.getElementById("gradeClass5").value;
    gradeClass6 = document.getElementById("gradeClass6").value;
    gradeClass7 = document.getElementById("gradeClass7").value;
    gradeClass8 = document.getElementById("gradeClass8").value;

    weightClass1 = document.getElementById("weightClass1").value;
    weightClass2 = document.getElementById("weightClass2").value;
    weightClass3 = document.getElementById("weightClass3").value;
    weightClass4 = document.getElementById("weightClass4").value;
    weightClass5 = document.getElementById("weightClass5").value;
    weightClass6 = document.getElementById("weightClass6").value;
    weightClass7 = document.getElementById("weightClass7").value;
    weightClass8 = document.getElementById("weightClass8").value;

    let unweightedGPA = calculateUnweightedGPA();
    let weightedGPA = calculateWeightedGPA();

    document.getElementById("resultUnweighted").innerText = "Your Unweighted GPA Is : " + unweightedGPA;
    document.getElementById("resultWeighted").innerText = "Your Weighted GPA Is : " + weightedGPA;

}

function letterToNumber(grade){
    if (grade == "A+" || grade == "a+"){
        return 4.0;
    }
    else if (grade == "A" || grade == "a"){
        return 3.66;
    }
    else if (grade == "B+" || grade == "b+"){
        return 3.33;
    }
    else if (grade == "B" || grade == "b"){
        return 3.0;
    }
    else if (grade == "C+" || grade == "c+"){
        return 2.5;
    }
    else if (grade == "C" || grade == "c"){
        return 2.0;
    }
    else if (grade == "D" || grade == "d"){
        return 1.0;
    }
    else if (grade == "F" || grade == "f"){
        return 0.0;
    }
    else{
        return -1;
    }
}

function weightedGrade(weightUp, grade) {
    if ((weightUp.toLowerCase() === "yes" || weightUp.toLowerCase() === "y") && letterToNumber(grade) == 4.0) {
        return 4.3333;
    } 
    else if ((weightUp.toLowerCase() === "yes" || weightUp.toLowerCase() === "y") && letterToNumber(grade) == 3.66) {
        return 4.0000;
    } 
    else if ((weightUp.toLowerCase() === "yes" || weightUp.toLowerCase() === "y") && letterToNumber(grade) == 3.33) {
        return 3.6666;
    } 
    else if ((weightUp.toLowerCase() === "yes" || weightUp.toLowerCase() === "y") && letterToNumber(grade) == 3.0) {
        return 3.3333;
    } 
    else if ((weightUp.toLowerCase() === "yes" || weightUp.toLowerCase() === "y") && letterToNumber(grade) == 2.5) {
        return 3.0000;
    } 
    else if ((weightUp.toLowerCase() === "yes" || weightUp.toLowerCase() === "y") && letterToNumber(grade) == 2.0) {
        return 2.5000;
    } 
    else if ((weightUp.toLowerCase() === "yes" || weightUp.toLowerCase() === "y") && letterToNumber(grade) == 1.0) {
        return 2.0000;
    } 
    else if ((weightUp.toLowerCase() === "yes" || weightUp.toLowerCase() === "y") && letterToNumber(grade) == 0.0) {
        return 1.0000;
    } 
    else if (weightUp.toLowerCase() === "no" || weightUp.toLowerCase() === "n") {
        return letterToNumber(grade);
    } 
    else {
        return -1;
    }
}

function calculateUnweightedGPA(){
    let gradePointsUnweighted = 0;
    let numClasses = 0;

    function processClass(grade){
        let numericGrade = letterToNumber(grade);
        if (numericGrade >= 0){
            gradePointsUnweighted += numericGrade;
            numClasses++;
        }
    }

processClass(gradeClass1);
processClass(gradeClass2);
processClass(gradeClass3);
processClass(gradeClass4);
processClass(gradeClass5);
processClass(gradeClass6);
processClass(gradeClass7);
processClass(gradeClass8);

if (numClasses === 0) {
    return "No Valid Grades Entered, Try Again.";
}

let unweightedOutput = gradePointsUnweighted / numClasses;
unweightedOutput = unweightedOutput.toFixed(4);
return unweightedOutput;
}

function calculateWeightedGPA(){
    let gradePointsWeighted = 0;
    let numClasses = 0;
    
    function processClass(weightUp, grade){
        let numericGrade = weightedGrade(weightUp, grade);
        if (numericGrade >= 0){
            gradePointsWeighted += numericGrade;
            numClasses++;
        }
    }

processClass(weightClass1, gradeClass1);
processClass(weightClass2, gradeClass2);
processClass(weightClass3, gradeClass3);
processClass(weightClass4, gradeClass4);
processClass(weightClass5, gradeClass5);
processClass(weightClass6, gradeClass6);
processClass(weightClass7, gradeClass7);
processClass(weightClass8, gradeClass8);

if (numClasses === 0) {
    return "No Valid Grades Entered, Try Again.";
}

let weightedOutput = gradePointsWeighted / numClasses;
weightedOutput = weightedOutput.toFixed(4);
return weightedOutput;
}