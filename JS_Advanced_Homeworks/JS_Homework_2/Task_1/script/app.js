let btn = $("#btn");
let academyName = $("#academyName");
let studentsList = $("#studentsList");

function displayData(data) {
    
    academyName.text(data.academy);

    
    studentsList.empty();

    
    for (let i = 0; i < data.students.length; i++) {
        let studentName = data.students[i];
        studentsList.append("<li>" + studentName + "</li>");
    }
}

btn.on("click", function () {
    $.ajax({
        url: "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
        method: "GET",
        dataType: "json", 
        success: function (data) {
            console.log(data); 
            displayData(data); 
        },
        error: function (error) {
            console.log("AJAX error:", error);
        }
    });
});
