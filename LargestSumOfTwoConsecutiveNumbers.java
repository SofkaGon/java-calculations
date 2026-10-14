import java.util.Scanner;

public class LargestSumOfTwoConsecutiveNumbers {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter amount of numbers minimum 2: ");
        int n = sc.nextInt();
        System.out.print("Enter first value: ");
        int a = sc.nextInt();
        System.out.print("Enter second value: ");
        int b = sc.nextInt();

        int x = 2;
        int max = a + b;
        int maxa = a;
        int maxb = b;
        int sum = 0;

        while (x < n){
            System.out.print("Enter next value: ");
            int c = sc.nextInt();

            sum = b + c;

            if (sum > max){
                max = sum;
                maxa = b;
                maxb = c;
            }

            b = c;
            x++;
        }

        System.out.println("max " + max + " from pair " + maxa + " + " + maxb);


        sc.close();
    }
}
