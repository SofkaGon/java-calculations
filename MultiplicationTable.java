import java.util.Scanner;

public class MultiplicationTable {
        public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter number: ");
        int n = Integer.parseInt(sc.nextLine());

        int c = 1;
        int result = 0;

        while (c <= 10) {
            result = n * c;
            System.out.println(n + " * " + c + " = "  + result);
            c++;
        }

        sc.close();
        }
}
