import java.util.Scanner;

public class PrimeNumberCheck {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter number: ");
        int n = Integer.parseInt(sc.nextLine());

        int diviser = 2;
        boolean prime = true;
        int newValue = 0;
        
        while (n > diviser && prime == true){
            newValue = n % diviser;

            if (newValue == 0 ) {
                prime = false;
            }
            diviser++;
        }

        System.out.println(prime);

        sc.close();
    }
}
