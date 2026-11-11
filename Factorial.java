public class Factorial {
    public static String calculate(int n){

    if ( n > 20){
        return "N must be 20 or less" ;
    }
    else if (n < 0){
        return "Factorial is not defined for negative numbers";
    }
    // || means "or"
    else if (n == 1 || n == 0 ){
        return  n + " ! = 1" ;
    }
    else{
        //long works like int but allows for bigger numbers like factorial 20, that results in negative incorrect answer when using int
        long c = 2;
        long result = 1;

        String output = n + " != 1" ;


        while (c <= n) {
            result = result * c;
            output = output + " x " + c ;
            c = c + 1;
        }

        output = output + " = " + result ;
        
        return output;
    }
    }
}

