//Name:Sofiia Gontar
//Question #1 Factorial Calculator, calculates factorial of numbers between 0-20

import java.util.Scanner;

public class Factorial {
     public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter number: ");
        int n = Integer.parseInt(sc.nextLine());

        if ( n > 20){
            System.out.println("N must be 20 or less" );
        }
        else if (n < 0){
            System.out.println("Factorial is not defined for negative numbers");
        }
        // || means "or"
        else if (n == 1 || n == 0 ){
            System.out.println(n + " ! = 1" );
        }
        else{
            //long works like int but allows for bigger numbers like factorial 20, that results in negative incorrect answer when using int
            long c = 2;
            long result = 1;

            System.out.print(n + " != " + result );


            while (c <= n) {
                System.out.print(  " x " );
                result = result * c;
                System.out.print( " " + c );
                c = c + 1;
            }

            System.out.print( " = " + result );

        }
        //closes scanner function
        sc.close();
     }
}
