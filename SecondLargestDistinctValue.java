import java.util.Scanner;

public class SecondLargestDistinctValue {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter amount of numbers: ");
        int n = sc.nextInt();
        System.out.println("Enter the first value: ");
        int a = sc.nextInt();

        System.out.println("Enter the second value: ");
        int b = sc.nextInt();

        int counter = 2;
        int max1 = 0;
        int max2 = 0;

        
        if (a >= b) {
            max1 = a;
            max2 = b;
        }
        else {
            max1 = b;
            max2 = a;
        }

        while (counter <= n) {
            System.out.print("Enter the next value: ");
            int c = sc.nextInt();

            if (c > max1) {
                max2 = max1;
                max1 = c;
            }
            else if (c > max2) {
                max2 = c;
            }

            counter++;
        }

        if (max1 == max2){
            System.out.println("No second largest value");
        }
        else{
            System.out.println(max2);
        }

        sc.close();
    }
}
