const score = 2;
let grade;
if (score >= 80 && score <= 100) {
    grade = "A";
} else if (score >= 60 && score <= 79 ) {
    greade = "B"

} else if  (score >= 50 && score <= 59) {
    grade = "C";
} else if (score >= 40 && score <= 49) {
    grade = "F";
} else if(score >= 0 && score <= 39) {
    grade = "F"
} else {
    console.log("Inavalid number")
}

console.log(grade);