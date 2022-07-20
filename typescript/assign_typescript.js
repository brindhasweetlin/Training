var studentName = "Alan";
var studentRolNo = "001";
var studentClass = "2 'E'";
var subjectMark = [90, 90, 100, 95, 100];
var isStudentPass = true;
var studentParent = { fatherName: "Eben", motherName: "Johnsi" };
var studentContact = {
    streetName: "11,Stabli Street",
    place: "Medavakkam",
    city: "Chennai",
    pincode: 560037,
    phoneNumber: 9876543210
};
function clickEvent() {
    document.write("<h3>Student Details</h3>");
    document.write("Student Name <br><input type='text' value='" + studentName + "'><br><br>");
    document.write("Student Roll Number<br><input type='text' value='" + studentRolNo + "'><br><br>");
    document.write("Student Class<br><input type='text' value='" + studentClass + "'><br><br>");
    var mark = "";
    var subjectNumber = subjectMark.length;
    for (var i = 0; i < subjectNumber; i++) {
        if (i != subjectNumber - 1)
            mark = mark + String(subjectMark[i]) + ", ";
        else
            mark = mark + String(subjectMark[i]);
    }
    document.write("Student Subject Mark <br><input type='text' value='" + mark + "'><br><br>");
    var passVal = "";
    if (isStudentPass)
        passVal = "Yes";
    else
        passVal = "No";
    document.write("Is Student Pass<br><input type='text' value=" + passVal + "><br><br>");
    document.write("Student Father Name<br><input type='text' value=" + studentParent.fatherName + "><br><br>");
    document.write("Student Mother Name<br><input type='text' value=" + studentParent.motherName + "><br><br>");
    document.writeln("Student Contact Details<br><textarea rows='4' cols='50'>" + studentContact.streetName + "\n" + studentContact.place + "\n" + studentContact.city + "-" + studentContact.pincode + "\nPhoneNo-" + studentContact.phoneNumber + "</textarea><br><br>");
}
