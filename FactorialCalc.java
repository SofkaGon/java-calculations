import java.util.Scanner;

public class FactorialCalc {
     public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter number: ");
        int a = Integer.parseInt(sc.nextLine());

        int n = a;
        int result = 1;

        while (n > 0) {
            result = result * n;
            n = n - 1;
        }

        System.out.println(a + " != " + result );



        sc.close();
     }
}
