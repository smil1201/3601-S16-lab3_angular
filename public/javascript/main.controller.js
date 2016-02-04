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

        mainControl.addData = function(){
            if(true) { // mainControl.courseField.length >= 1
                mainControl.data.push({course: mainControl.courseField, grade: mainControl.gradeField, credits: mainControl.creditsField});
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
    });
