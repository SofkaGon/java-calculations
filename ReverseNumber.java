import java.util.Scanner;

public class ReverseNumber {
         public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter a value: ");
        int a = Integer.parseInt(sc.nextLine());

        int n = a;
        int b = 0;
        int c = 0;

        while (n > 0) {
            b = n % 10;
            c = c * 10 + b;
            n = n/10;
        }
        System.out.println(c);

        sc.close();
    }
}
