public class MovieTickets {
    public static void main(){
        //function for buying tickets depending on aga=e
        int age = 50;
        boolean isTuesday = true;
        double price;
        if (isTuesday){
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
        System.out.printf("price is $%.2f for age: %d", price, age );
    }
}
