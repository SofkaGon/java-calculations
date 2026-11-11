//Name:Sofiia Gontar
//Question #2 Digit sum until single digit, continuesly calculates the sum of the digits of the number, until the sum becomes a single digit number
import java.util.Scanner;

public class DigitSum {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter a value: ");
        int n = Integer.parseInt(sc.nextLine());

        int sum = 0;
        int d = 0;
        if (n <= 0){
        System.out.print("Please enter a positive whole number.");
        }
        else {
            while (n >= 10) {
                while (n != 0){
                    d = n % 10;
                    sum = sum +d;
                    n = n/10;
                    System.out.print(sum );
                    if (n != 0){
                    System.out.print(" -> ");
                    }

                }
                //reasigns n to continue adding digits until single digit
                n =sum;
                sum =0;
            }
            System.out.printf("%n Final result: %d ", n);
        }   
        sc.close();
    }

}
