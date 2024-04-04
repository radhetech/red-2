var primaryStudent = [];
var secondaryStudent = [];
var collageStudent = [];

//add students
function addstudent() {
    var student_name = document.getElementById('student').value;
    var student_age = document.getElementById('age').value;
    var students = {
        studentName: student_name,
        studentAge: student_age,
    }
    if(student_name == ''){
        alert("Please Enter name")
    }
    else if(student_age == ''){
        alert("Please Enter age")
    }
    else if (student_age >= 5 && student_age <= 15) {
        primaryStudent.push(students);
        var newArrG = primaryStudent.map(function (student) {
            return student.studentName + " - " + student.studentAge + "<br>";
        })
        document.getElementById('student_primary').innerHTML = newArrG.join("");
        document.getElementById('r_student_primary').innerHTML = newArrG.join("");
    }
    else if (student_age >= 16 && student_age <= 17) {
        secondaryStudent.push(students);
        var newArrG = secondaryStudent.map(function (student) {
            return student.studentName + " - " + student.studentAge + "<br>";
        })
        document.getElementById('student_secondary').innerHTML = newArrG.join("");
        document.getElementById('r_student_secondary').innerHTML = newArrG.join("");
    }
    else if (student_age >= 18 && student_age <= 70) {
        collageStudent.push(students);
        var newArrG = collageStudent.map(function (student) {
            return student.studentName + " - " + student.studentAge + "<br>";
        })
        document.getElementById('student_collage').innerHTML = newArrG.join("");
        document.getElementById('r_student_collage').innerHTML = newArrG.join("");
    }
    else if (student_age < 5) {
        alert("You're not eligible for Primary School")
    }
    else if (student_age > 70) {
        alert("You're not eligible for School or Collage")
    }

    var totalPrimaryStudent = 0;
    primaryStudent.forEach(function(i){
        totalPrimaryStudent ++;
    })
    document.getElementById('ttl-pri-stud').innerHTML = 'Total Primary Student -'+ totalPrimaryStudent;
    
    var totalSecondaryStudent = 0;
    secondaryStudent.forEach(function(i){
        totalSecondaryStudent ++;
    })
    document.getElementById('ttl-sec-stud').innerHTML = 'Total Seconday Student -'+ totalSecondaryStudent;
   
    var totalCollageStudent= 0;
    collageStudent.forEach(function(i){
        totalCollageStudent++;
    })
    document.getElementById('ttl-clg-stud').innerHTML = 'Total Collage Student -'+ totalCollageStudent;
    
    if (totalPrimaryStudent >= 1) {
        document.getElementById("rp").disabled = false;
    } 
    if (totalSecondaryStudent >= 1) {
        document.getElementById("rs").disabled = false;
    } 
    if (totalCollageStudent >= 1) {
        document.getElementById("rc").disabled = false;
    } 
    
}
// Remove Student
function removePrimary(){
    primaryStudent.splice(-1);
    var primaryRemoveStud = primaryStudent.map(function (student) {
        return student.studentName + " - " + student.studentAge + "<br>";
    })
    document.getElementById('r_student_primary').innerHTML = primaryRemoveStud.join("");
    document.getElementById('student_primary').innerHTML = primaryRemoveStud.join("");
    document.getElementById('ttl-pri-stud').innerHTML = 'Total Primary Student -'+ primaryRemoveStud.length;
    if(primaryRemoveStud == 0){
        document.getElementById("rp").disabled = true;
    }
}
function removeSecondary(){
    secondaryStudent.splice(-1);
    var secondaryRemoveStud = secondaryStudent.map(function (student) {
        return student.studentName + " - " + student.studentAge + "<br>";
    })
    document.getElementById('r_student_secondary').innerHTML = secondaryRemoveStud.join("");
    document.getElementById('student_secondary').innerHTML = secondaryRemoveStud.join("");
    document.getElementById('ttl-sec-stud').innerHTML = 'Total Secondary Student -'+ secondaryRemoveStud.length;
    if(secondaryRemoveStud == 0){
        document.getElementById("rs").disabled = true;
    }
}
function removeCollage(){
    collageStudent.splice(-1);
    var collageRemoveStud = collageStudent.map(function (student) {
        return student.studentName + " - " + student.studentAge + "<br>";
    })
    document.getElementById('r_student_collage').innerHTML = collageRemoveStud.join("");
    document.getElementById('student_collage').innerHTML = collageRemoveStud.join("");
    document.getElementById('ttl-clg-stud').innerHTML = 'Total Collage Student -'+ collageRemoveStud.length;
    if(collageRemoveStud == 0){
        document.getElementById("rc").disabled = true;
    }
}