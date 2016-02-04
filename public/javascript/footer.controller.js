//====================== FOOTER CONTROLLER ============================
angular.module('stdComponents').controller('footerCtrl', function(){
    var foot = this;
    console.log("Footer controller loaded");

    foot.pages = [
        {text: "Top", link: '#'} // This doesn't work. No clue.
    ];
});
