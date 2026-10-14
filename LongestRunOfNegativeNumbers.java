import java.util.Scanner;

public class LongestRunOfNegativeNumbers {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter amount of numbers: ");
        int n = sc.nextInt();

        int c = 1;
        int lenght = 0;
        int b = lenght;

        while (c <= n) {
            System.out.print("Enter first value: ");
            int a = sc.nextInt();

            if (a > 0){
                if (lenght > b){
                    b = lenght;
                }
                lenght = 0;
            }
            
            c++;
            lenght++;
        }

        if (lenght > b){
            b = lenght;
        }
        if (b > 0){
            System.out.println(b);
        }
        else {
            System.out.println("0");
        }

        sc.close();
    }
}
