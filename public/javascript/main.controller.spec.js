'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl as mainControl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("Testing Main Controller functionality: ", function(){

        it("should be able to remove an item from the list", function(){
            scope.mainControl.data.push({course: "test", grade: "A", credits: "1"});
            var initialLength = scope.mainControl.data.length;
            scope.mainControl.removeData(0);
            expect(scope.mainControl.data.length < initialLength).toEqual(true);
        });
        
        it("should be able to add an item to the list", function(){
            var initialLength = scope.mainControl.data.length;
            scope.mainControl.gradeField = "A";
            scope.mainControl.creditsField = "1"
            scope.mainControl.addData();
            expect(scope.mainControl.data.length > initialLength).toEqual(true);
        });

        it('Testing letter to number conversions', function(){
            expect(scope.mainControl.letToNum("A")).toBe(4.00);
            expect(scope.mainControl.letToNum("A-")).toBe(3.66);
            expect(scope.mainControl.letToNum("B+")).toBe(3.33);
            expect(scope.mainControl.letToNum("B")).toBe(3.00);
            expect(scope.mainControl.letToNum("B-")).toBe(2.66);
            expect(scope.mainControl.letToNum("C+")).toBe(2.33);
            expect(scope.mainControl.letToNum("C")).toBe(2.00);
            expect(scope.mainControl.letToNum("C-")).toBe(1.66);
            expect(scope.mainControl.letToNum("D+")).toBe(1.33);
            expect(scope.mainControl.letToNum("D")).toBe(1.00);
            expect(scope.mainControl.letToNum("D-")).toBe(0.66);
            expect(scope.mainControl.letToNum("F")).toBe(0);
            expect(scope.mainControl.letToNum("sdf")).toBe(-1); // Can't be bothered to write a custom error, and this will work fine with the GPA Calculator function anywhow.
        });

    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl as navbar', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
        expect(scope.navbar.pages.length > 0).toEqual(true);
    });
});
