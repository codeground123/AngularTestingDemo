describe('filters', function () {

    beforeEach(module("myModule"));

    describe('reverse fitler', function () {
        var reverse;

        beforeEach(inject(function ($filter) {

            reverse = $filter('reverse', {});
        }));

        it('should reverse a string', function(){
                expect(reverse('phani')).toBe("inahp");
        });
        it('should throw legthy message', function(){
            expect(reverse('phani jkasdkf uiuii')).toBe("lengthy string");
        });

    });


});