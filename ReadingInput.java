import java.util.Scanner;
public class ReadingInput {
    public static void main(){
        //Scanner keyIn = new Scanner(System.in);
        //String sentance = keyIn.nextLine();
        //String word = keyIn.nextLine();
        //int number1 = keyIn.nextInt();
        //double number2 = keyIn.nextDouble();

        //System.out.print("Enter a value: ");



        Scanner keyIn = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = keyIn.nextLine();
        System.out.print("Enter day of week: ");
        String day = keyIn.nextLine();
        System.out.print("Enter your age: ");
        int age = keyIn.nextInt();

        double price;
        
       
        if (day.equals( "Tuesday" ) || day.equals( "tuesday" ) ){
            price = 10;
        }
        else {
            if (age < 13){
                price = 8.65;
            }
            else if (age >= 65){
                price = 9;
            }
            else{
            price = 14;
            }
        }
            
        System.out.printf("Hi %s, price is $%.2f for age: %d",name, price, age );

        keyIn.close();
    }
}
