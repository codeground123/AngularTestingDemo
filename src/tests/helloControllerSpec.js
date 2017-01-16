/**
 * Created by rupakulr on 1/13/2017.
 */


describe("helloController", function(){

    beforeEach(module("myModule"));

    var helloController, scope, $q, deferred;

    beforeEach(inject(function ($rootScope, $controller, _$q_, quoteFactory) {
        $q = _$q_;
        scope = $rootScope.$new();
        deferred = _$q_.defer();
        spyOn(quoteFactory, 'getQuotes').and.returnValue(deferred.promise);

        helloController = $controller('helloController', {
           $scope:scope,
            quoteFactory : quoteFactory
        });
    }));

    it("assigns firstName", function(){
        expect(scope.firstName).toEqual("Phani Kumar");
    });

    it('should resolve promise', function () {
        // Setup the data we wish to return for the .then function in the controller
        deferred.resolve([
            { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
            { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
            { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
            { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
        ]);

        // We have to call apply for this to work
        scope.$apply();

        // Since we called apply, not we can perform our assertions
        expect(scope.quotes).not.toBe(undefined);
        expect(scope.error).toBe(undefined);
    });

    it('should reject promise', function(){
        deferred.reject();
        scope.$apply();
        expect(scope.quotes.length).toBe(0);
        expect(scope.error).toBe("unable to get the quotes");
    });

});