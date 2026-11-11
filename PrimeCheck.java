public class PrimeCheck {
    public static String calculate(String a) {
        
        long n = 0;
        boolean valid = true;
        //checks if all characters are digits and if not rejects input as invalid
        int start = 0;

        if (a.length() > 0 && a.charAt(0) == '-'){
            start = 1;
        }

        if(start == a.length()){
            valid = false;
        }

        for(int i = start ; i < a.length(); i ++){
            if(!Character.isDigit(a.charAt(i))){
                valid = false;
            }
        }

        if (valid == false){
           return a + " is not a number" ;
        }

        try{
            n = Long.parseLong(a);
        }
        catch(NumberFormatException e){
            return a + " is not a valid number";
        }   

        long diviser = 2;
        boolean prime = true;
        long newValue = 0;
        long smallestDiv = n;

        if (n < 2){
           return n + " is Not Prime (prime numbers start at 2)";
        }
        else{
            //find square root
            long square = 0; 
            long number = 1;
            long root = 0;

            while (square <= n){
                root = square;
                square = number * number;
                number++;
            }          
            //checking if any number aka. diviser, can divide the square root of n by any of it's factors
            while (root > diviser && prime == true){
                newValue = n % diviser;
                if (newValue == 0 ) {
                    prime = false;
                    smallestDiv = diviser;
                }
                diviser++;
            }
            if (prime == false){
                return n + " is Not prime (smallest divisor: " + smallestDiv + ")";
            }
        
            else {
              return n + " is Prime";
            }
        }
    }
}
