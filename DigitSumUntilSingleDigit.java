import java.util.Scanner;

public class DigitSumUntilSingleDigit {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter a value: ");
        int n = Integer.parseInt(sc.nextLine());

        int sum = 0;
        int a = 0;

        while (n >= 10) {
            while (n != 0){
                a = n % 10;
                sum = sum +a;
                n = n/10;
            }
            n =sum;
            sum =0;
        }
        System.out.println(n);
        sc.close();
    }

}
