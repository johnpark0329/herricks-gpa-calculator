// Declaring class name variables.
let class1; 
let class2;
let class3;
let class4;
let class5;
let class6;
let class7;
let class8;
let class9;

// Declaring grade letter variables.
let gradeClass1;
let gradeClass2;
let gradeClass3;
let gradeClass4;
let gradeClass5;
let gradeClass6;
let gradeClass7;
let gradeClass8;
let gradeClass9;

// Declaring weight variables.
let weightClass1;
let weightClass2;
let weightClass3;
let weightClass4;
let weightClass5;
let weightClass6;
let weightClass7;
let weightClass8;
let weightClass9;

// Set up click event handler for the "submit" button.
document.getElementById("submit").onclick = function(){
// Retrieves values from input fields after "submit" button is clicked and stores in variables declared earlier.
    class1 = document.getElementById("class1").value;
    class2 = document.getElementById("class2").value;
    class3 = document.getElementById("class3").value;
    class4 = document.getElementById("class4").value;
    class5 = document.getElementById("class5").value;
    class6 = document.getElementById("class6").value;
    class7 = document.getElementById("class7").value;
    class8 = document.getElementById("class8").value;
    class9 = document.getElementById("class9").value;

    gradeClass1 = document.getElementById("gradeClass1").value;
    gradeClass2 = document.getElementById("gradeClass2").value;
    gradeClass3 = document.getElementById("gradeClass3").value;
    gradeClass4 = document.getElementById("gradeClass4").value;
    gradeClass5 = document.getElementById("gradeClass5").value;
    gradeClass6 = document.getElementById("gradeClass6").value;
    gradeClass7 = document.getElementById("gradeClass7").value;
    gradeClass8 = document.getElementById("gradeClass8").value;
    gradeClass9 = document.getElementById("gradeClass9").value;

    weightClass1 = document.getElementById("weightClass1").checked;
    weightClass2 = document.getElementById("weightClass2").checked;
    weightClass3 = document.getElementById("weightClass3").checked;
    weightClass4 = document.getElementById("weightClass4").checked;
    weightClass5 = document.getElementById("weightClass5").checked;
    weightClass6 = document.getElementById("weightClass6").checked;
    weightClass7 = document.getElementById("weightClass7").checked;
    weightClass8 = document.getElementById("weightClass8").checked;
    weightClass9 = document.getElementById("weightClass9").checked;

// Create variables to call the functions created.
    let unweightedGPA = calculateUnweightedGPA();
    let weightedGPA = calculateWeightedGPA();

// Telling what to output in HTML.
    document.getElementById("resultUnweighted").innerText = "Your Unweighted GPA Is : " + unweightedGPA;
    document.getElementById("resultWeighted").innerText = "Your Weighted GPA Is : " + weightedGPA;
    document.getElementById("conclusion").innerText = "Remember, your GPA does not define who you are!";
}

// Function to convert letter grades to numbers.
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

// Function to boost grade if class is weighted.
function weightedGrade(weightUp, grade) {
    let numericGrade = letterToNumber(grade);
    if (numericGrade >= 0){
        if (weightUp === true){
            return numericGrade + 0.3400;
        }
        else{
            return numericGrade;
        }
    }
    else{
        return -1;
    }
}

// Calculates unweighted GPA without taking AP/Honors into consideration.
function calculateUnweightedGPA(){
    let gradePointsUnweighted = 0;
    let numClasses = 0;

// Process individual grades and combine the different grades while incrementing number of classes.
    function processClass(grade){
        let numericGrade = letterToNumber(grade);
        if (numericGrade >= 0){
            gradePointsUnweighted += numericGrade;
            numClasses++;
        }
    }

// Convert and add the numeric values of grades to the GPA calculation.
processClass(gradeClass1);
processClass(gradeClass2);
processClass(gradeClass3);
processClass(gradeClass4);
processClass(gradeClass5);
processClass(gradeClass6);
processClass(gradeClass7);
processClass(gradeClass8);
processClass(gradeClass9);

// If no classes are entered, makes user submit inputs again.
if (numClasses === 0) {
    return "No Valid Grades Entered, Try Again.";
}

// Create variable with the final unweighted GPA rounded to four decimal points and returns the variable.
let unweightedOutput = gradePointsUnweighted / numClasses;
unweightedOutput = unweightedOutput.toFixed(4);
return unweightedOutput;
}

// Calculates weighted GPA  taking AP/Honors into consideration.
function calculateWeightedGPA(){
    let gradePointsWeighted = 0;
    let numClasses = 0;

// Process individual grades and combine the different grades while incrementing number of classes.
function processClass(weightUp, grade){
        let numericGrade = weightedGrade(weightUp, grade);
        if (numericGrade >= 0){
            gradePointsWeighted += numericGrade;
            numClasses++;
        }   
    }

// Convert and add the numeric values of grades to the GPA calculation.
processClass(weightClass1, gradeClass1);
processClass(weightClass2, gradeClass2);
processClass(weightClass3, gradeClass3);
processClass(weightClass4, gradeClass4);
processClass(weightClass5, gradeClass5);
processClass(weightClass6, gradeClass6);
processClass(weightClass7, gradeClass7);
processClass(weightClass8, gradeClass8);
processClass(weightClass9, gradeClass9);

// If no classes are entered, makes user submit inputs again.
if (numClasses === 0) {
    return "No Valid Grades Entered, Try Again.";
}

// Create variable with the final weighted GPA rounded to four decimal points and returns the variable.
let weightedOutput = gradePointsWeighted / numClasses;
weightedOutput = weightedOutput.toFixed(4);
return weightedOutput;
}
