//==================== MAIN CONTROLLER ==================================
    angular.module('stdControllers').controller('mainCtrl', function(){
        var mainControl = this;
        console.log("Main controller loaded!");

        mainControl.courseField = "";
        mainControl.gradeField = "";
        mainControl.creditsField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        mainControl.data = [

        ];

        mainControl.addData = function() {
            if (mainControl.letToNum(mainControl.gradeField) != -1 && !isNaN(parseInt(mainControl.creditsField))) {
                mainControl.data.push({
                    course: mainControl.courseField,
                    grade: mainControl.gradeField,
                    credits: mainControl.creditsField
                });
                mainControl.courseField = "";
                mainControl.gradeField = "";
                mainControl.creditsField = "";
            }
        };

        mainControl.removeData = function(index){
            mainControl.data.splice(index, 1);
        };

        mainControl.cat = function(str1, str2){
            return str1 + str2;
        };

        mainControl.itemsInList = function(){
            return mainControl.data.length;
        };

        mainControl.getGPA = function() {
            if (mainControl.data.length == 0) {return "";}

            var GP = 0.00;
            var totalCredits = 0;

            for(var i = 0; i < mainControl.data.length; i++) {
                totalCredits += parseFloat(mainControl.data[i].credits);
                GP += mainControl.letToNum(mainControl.data[i].grade) * parseInt(mainControl.data[i].credits);
            }

            return (GP/totalCredits).toFixed(2);

        };

        mainControl.letToNum = function(letGrade){
            var letterGrade = letGrade.toUpperCase();

            if (letterGrade == "A") {
                return 4.00;
            } else if (letterGrade == "A-"){
                return 3.66;
            } else if (letterGrade == "B+"){
                return 3.33;
            } else if (letterGrade == "B"){
                return 3.00;
            } else if (letterGrade == "B-"){
                return 2.66;
            } else if (letterGrade == "C+"){
                return 2.33;
            } else if (letterGrade == "C"){
                return 2.00;
            } else if (letterGrade == "C-"){
                return 1.66;
            } else if (letterGrade == "D+"){
                return 1.33;
            } else if (letterGrade == "D"){
                return 1.00;
            } else if (letterGrade == "D-"){
                return 0.66;
            } else if (letterGrade == "F") {
                return 0;
            } else {
                return -1;
            }
        };
    });
