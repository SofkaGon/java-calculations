import java.util.Scanner;

public class SumOfMultiplesOf3Or5 {
        public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter a value: ");
        int n = Integer.parseInt(sc.nextLine());

        int sum = 0;

        while (n > 1) {
            if (n % 3 == 0 || n % 5 == 0){
                sum = sum + n;
            }
            n = n-1;
        }
        System.out.print(sum);
        sc.close();

        }
}
