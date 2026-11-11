//Name:Sofiia Gontar
//Question #3 Maximum of multiple inputs chechs for which number is the highest and ouputs it at  the end
import java.util.Scanner;

public class MaxInput {
       public static void main(){
        Scanner sc = new Scanner(System.in);

        boolean end = false;
        double number = 0;
        double max = number;
        int nCounter = 0;

        while (end == false){
        //prints a question and accepts an integer input from the user
        System.out.println("Enter numbers one at a time. Type end to finish ");
        String a = sc.nextLine();
        String n = a.toLowerCase();
        if (n.equals("end")) {
         end = true;

         //checks for input that matches, negative sign, decimals, or digits
        } else if (n.matches("^-?\\d+(\\.\\d*)?$")){
            number = Double.parseDouble(n);
            nCounter ++;
        }
        else{
            System.out.printf("%s is not a number or end -ignore", n );
        }

        if (number > max){
            max = number;
        }       
        }

        if (nCounter == 0){
            System.out.println("No numbers were entered");
        }
        else{
            System.out.printf("Numbers entered: %d %nMaximum : %.2f", nCounter, max);
        }
        sc.close();

    }
}
