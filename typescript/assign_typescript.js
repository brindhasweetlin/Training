var studentName = "Alan";
var studentRolNo = "001";
var studentClass = "2 'E'";
var subjectMark = [90, 100, 100, 95];
var isStudentPass = true;
var studentParent = { fatherName: "Eben", motherName: "Johnsi" };
function clickEvent() {
    document.write("<h3>Student Details</h3>");
    document.write("Student Name <br><input type='text' value='" + studentName + "'><br><br>");
    document.write("Student Roll Number<br><input type='text' value='" + studentRolNo + "'><br><br>");
    document.write("Student Class<br><input type='text' value='" + studentClass + "'><br><br>");
    for (var i = 0; i < subjectMark.length; i++) {
        document.write("Student Subject Mark " + String(i + 1) + "<br><input type='text' value=" + subjectMark[i] + "><br><br>");
    }
    document.write("Is Student Pass<br><input type='text' value=" + isStudentPass + "><br><br>");
    document.write("Student Father Name<br><input type='text' value=" + studentParent.fatherName + "><br><br>");
    document.write("Student Mother Name<br><input type='text' value=" + studentParent.motherName + "><br><br>");
}
