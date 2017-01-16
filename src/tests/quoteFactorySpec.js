describe("quoteFactory Tests", function () {

    beforeEach(module("myModule"));

    var service, $httpBackend;

    beforeEach(inject(function (quoteFactory, _$httpBackend_) {
        service = quoteFactory;
        $httpBackend = _$httpBackend_;
    }));

    describe("getData", function () {
        it("should make ajax call to get quotes", function () {
            $httpBackend.whenGET("http://localhost:3412/quotes").respond([{ author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"}]);
            expect(service.getQuotes()).toBeDefined();
        });

        it("should resoolve to an array", function(){

            $httpBackend.whenGET("http://localhost:3412/quotes").respond([{ author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"}]);
            var promise = service.getQuotes(), theQuotes = null;
            promise.then(function(quotes){
                theQuotes = quotes;
            })
            $httpBackend.flush();
            expect(theQuotes instanceof Array).toBeTruthy();

        });

        it("should reject the prmise", function(){
            $httpBackend.whenGET("http://localhost:3412/quotes").respond(500);
            var promise = service.getQuotes(),result = null;

            promise.then(function(quotes){
                result = quotes;
            }, function(reason){
                result = reason;
            });

            $httpBackend.flush();
            expect(result).toBe("Error");

        });



    });


});