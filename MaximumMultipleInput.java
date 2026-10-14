import java.util.Scanner;

public class MaximumMultipleInput {
       public static void main(){
    Scanner sc = new Scanner(System.in);

        boolean end = false;
        int number = 0;
        int max = number;

        while (end == false){
        //prints a question and accepts an integer input from the user
        System.out.println("Enter the first value or type \"end\" when done: ");
        String a = sc.nextLine();
        if (a.equals("end")) {
         end = true;

        } else if (a.matches("\\d*")){
            number = Integer.parseInt(a);
        }

        if (number > max){
            max = number;
        }       
        }

        if (max == 0){
            System.out.println("No numbers entered");
        }
        else{
            System.out.println(max);
        }
        sc.close();

    }
}
