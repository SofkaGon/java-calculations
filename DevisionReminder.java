import java.util.Scanner;

public class DevisionReminder {
    public static void main(){
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter first value ");
        int a = Integer.parseInt(sc.nextLine());
        System.out.print("Enter second value: ");
        int b = Integer.parseInt(sc.nextLine());

        int result = a/b;
        int rest = a % b;

        System.out.printf("The result of %d / %d is %d and the reminder is %d", a, b, result, rest);

        sc.close();

    }
}
