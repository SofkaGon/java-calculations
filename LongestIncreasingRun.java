import java.util.Scanner;

public class LongestIncreasingRun {
   public static void main(){
    Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter amount of numbers: ");
        int n = sc.nextInt();
        System.out.println("Enter the first value: ");
        int a = sc.nextInt();

        int c = 1;
        int lenght = 1;
        int longest = 1;

        while (c < n) {
            System.out.print("Enter the second value: ");
            int b = sc.nextInt();

            if (a < b){
                lenght++;
                System.out.print("lenght is incresead");
            }

            else if (b < a){
                if (lenght > longest){
                    longest = lenght;

                    lenght = 0;
                    System.out.print("lenght is 0");
                }
            }
            
            a = b;
            c++;
        }

        if (lenght > longest){
            longest = lenght;
        }

        System.out.print(longest);

    sc.close();
   } 
}
