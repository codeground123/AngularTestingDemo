describe('quoteFactory spec', function() {

beforeEach(module("myModule"));

var quoteFactory, httpBackend, q, authors;

    beforeEach(inject(function (_quoteFactory_, $httpBackend, $q) {

        authors = [
            { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
            { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
            { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
            { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
        ];
        quoteFactory = _quoteFactory_;
        httpBackend = $httpBackend;
        q=$q;
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
    describe("getquotes", function(){

        it("should get list of authors", function(){
            var promise, response, result;
            promise = quoteFactory.getQuotes();
            promise.then(function(data){
                result = data;
            });
            response = {
                data: {
                    items: authors
                }
            };
            httpBackend.expectGET("localhost:3412/quotes").respond(authors); // Expect a GET request and send back a canned response
            httpBackend.flush(); // Flush pending requests

            expect(result).toEqual(response);
           // expect(result.data.items).toEqual(authors);

        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });
    });


});