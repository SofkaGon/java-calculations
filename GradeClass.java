import java.util.Scanner;

public class GradeClass {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter number: ");
        int a = Integer.parseInt(sc.nextLine());

        if (a >= 90) {
            System.out.println("A");
        }
         else if (a >= 80) {
            System.out.println("B");
        }
         else if (a >= 70) {
            System.out.println("C");
        }
         else if (a >= 60) {
            System.out.println("D");
        }
         else  {
            System.out.println("F");
        }

        sc.close();
    }
}