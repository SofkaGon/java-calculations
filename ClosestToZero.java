import java.util.Scanner;

public class ClosestToZero {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter amount of numbers minimum 2: ");
        int n = Integer.parseInt(sc.nextLine());
        System.out.print("Enter first value: ");
        int a = Integer.parseInt(sc.nextLine());
        
        int cDistance = 0;
        int d = 0;
        int c = 2; 

        if (a < 0){
            cDistance = a * (-1);
        }
        else{
            cDistance = a;
        }

        int min = a;

        while (c <= n) {
            System.out.print("Enter next value: ");
            a = sc.nextInt();

            if (a < 0){
                d = a * (-1);
            }
            else{
                d = a;
            }

            if (d < cDistance) {
                cDistance = d;
                min = a;
            }
            else if (d == cDistance){
                if (a > 0){
                    cDistance = d;
                    min = a;
                }
            }

            c++;
            
        }

        System.out.println(min);


        sc.close();
    }
}
