/**
 * Created by rupakulr on 1/14/2017.
 */
myModule.filter("reverse", function(){

    return function(input){

        if(input.length > 10){
            return "lengthy string";
        }
        return input.split('').reverse().join('');
    }
});