function gradeChecker(marks) {
    if (marks >= 90) {
        return "Grade A";
    }else if (marks >= 75) {
        return "Grade B";
    }else if (marks >= 60) {
        return "Grade C";
    }else if (marks >= 40) {
        return "Grade D";
    }else if (marks >= 20) {
        return "Grade F";
    }
}

console.log(gradeChecker(20));