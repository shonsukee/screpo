const students = [
    "student1", "student2", "student3",
    "student_name1", "student_name2", "student_name3"
];

function copyText(txtname) {
    var targetCode = document.getElementById(txtname);
    targetCode.select(); // コピーしたい要素を選択状態にする
    document.execCommand("Copy");
}
function resetText(student_id) {
    if (localStorage.getItem(student_id)) {
        document.getElementById(student_id).value = "";
        localStorage.setItem(student_id, "");
    }
}
function allReset() {
    students.forEach(element => {
        resetText(element);
    });
}
function redirectToScrepo() {
    window.open("https://sukurepo.azurewebsites.net/parent/p_login", "_blank");
}

function saveText(student_id, text) {
    localStorage.setItem(student_id, text);
}

window.onload = function () {
    students.forEach(element => {
        var saveTexts = localStorage.getItem(element);
        if (saveTexts) {
            document.getElementById(element).value = saveTexts;
        }
    });
}