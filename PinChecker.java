import java.util.Scanner;
public class PinChecker {
    public static void main(){
        final int PIN = 2288;
        boolean pin = true;


        while (pin == true){
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter a 4-digit name");
            String input = sc.nextLine();
            int digit = Integer.parseInt(input);
            if (digit == PIN){
                System.out.println("Pin is correct");
                pin = false;
            }
        }
    }
}
