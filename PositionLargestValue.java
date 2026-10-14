import java.util.Scanner;

public class PositionLargestValue {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter amount of numbers: ");
        int n = Integer.parseInt(sc.nextLine());
        System.out.print("Enter first value: ");
        int a = Integer.parseInt(sc.nextLine());

        int position = 1;
        int maxPosition = 1;
        int max = a;
        int c = 1;

        while (c < n) {
            System.out.println("Enter next value:");
            a = sc.nextInt();
            if (a > max){
                max = a;
                maxPosition = position;
            }
            c++;
            position++;
            
        }


        System.out.println("largest " + max + " at position " + maxPosition );

        sc.close();

    }
}