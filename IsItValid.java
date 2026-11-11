//import libraries that are needed
import java.util.Scanner;//import library for scanner
public class IsItValid {
    public static void main(){
        Scanner sc = new Scanner(System.in); //Scanner "scanner name" = new Scanner(System.in)
        
        System.out.println("Please enter a number:");
        String input = sc.nextLine();
        //while (){
        //    System.out.println("Number invalid, please try again:");
        //    input = sc.nextLine();
        //}

        System.out.println("please enter a word:");
        String word = sc.nextLine();


        int n = Integer.parseInt(input);
        sc.nextLine(); //to get rid off the \n after the number
        int c = 1;

        while (c <= n){
            System.out.println(c);
            System.out.println(word);

            c++;
        }
    }
}
