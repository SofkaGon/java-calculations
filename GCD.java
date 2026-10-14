import java.util.Scanner;

public class GCD {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first value: ");
        int a = sc.nextInt();
        System.out.print("Enter second value: ");
        int b = sc.nextInt();

        int value1 = a;
        int value2 = b;
        

        if (value2 > value1){
            value1 = b;
            value2 = a;
        }

        int d = value2;
        int GCD = d;

        while (d > 0) {
            d = value1 % value2;
            if (d < GCD && d > 0){
                GCD = d;
            }

            value1 = value2;
            value2 = d;
        }
        System.out.println(GCD);
        sc.close();

        }

}
