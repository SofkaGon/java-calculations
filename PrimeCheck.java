//Name:Sofiia Gontar
//Question #4 Prime number check, checks if the number inputed is prime or not, and if it's not shows it's divisers
import java.util.Scanner;

public class PrimeCheck {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter number: ");
        String a = sc.nextLine();
        long n = 0;
        boolean valid = true;
        //checks if all characters are digits and if not rejects input as invalid
        for(int i = 1 ; i < a.length(); i ++){
            if(!Character.isDigit(a.charAt(i))){
                valid = false;
            }
        }

        if (valid == false){
            System.out.printf("%s is not a number", a );
        }
        n = Long.parseLong(a);
        long diviser = 2;
        boolean prime = true;
        long newValue = 0;
        long smallestDiv = n;

        if (n < 2){
            System.out.println( n + " is Not Prime (prime numbers start at 2)");
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
                if (diviser < smallestDiv)
                    smallestDiv = diviser;
                if (newValue == 0 ) {
                    prime = false;
                }
                diviser++;
            }
            if (prime == false){
                System.out.println(n + " is Not prime (smallest divisor: " + smallestDiv + ")");
            }
        
            else {
                System.out.println(n + " is Prime");
            }
        }
        sc.close();
    }
}
