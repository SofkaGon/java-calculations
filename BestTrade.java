import java.util.Scanner;//import library for scanner
public class BestTrade {
    public static void main(){
        Scanner sc = new Scanner(System.in); //Scanner "scanner name" = new Scanner(System.in)
        
        //System.out.println("Please enter amount of days:");
        String N = sc.nextLine();
        int days = Integer.parseInt(N);//change n to days as I need to parse it, which i did not need to do in flow chart

        boolean valid = true;

        while (valid == true){
            if (days < 2){
                //System.out.println("Invalid input, please input at least 2 days");
                valid = false;
            }

            int day = 1;

            //System.out.println("Please enter price:");
            String price = sc.nextLine();
            double p = Double.parseDouble(price);
            double minP = p; //min price 
            double potentialminP = p;
            int potentialbuyD =  day;
            int buyD = day;
            double bestProfit = 0; //renamed from BP to bestProfit for easier navigation of code

            day ++;

            //System.out.println("Please enter price for the next day:");
            String price1 = sc.nextLine();
            p = Double.parseDouble(price1);
            potentialminP = p;
            potentialbuyD =  day;
            int sellD = day;
            bestProfit = p - minP; 


            while (day < days){
                day ++;
                //System.out.println("Please enter price for the next day:");
                String price2 = sc.nextLine();
                p = Double.parseDouble(price2);
                double profit = p - minP;
                double potentialProfit = p - potentialminP;

                if (profit >= potentialProfit){
                    if (profit > bestProfit ){
                        sellD = day;
                        bestProfit = profit;
                    }
                }
                else{
                    if (potentialProfit > bestProfit){
                        buyD = potentialbuyD;
                        minP = potentialminP;
                        sellD = day;
                        bestProfit = potentialProfit;
                    }
                }
                potentialminP = p;
                potentialbuyD = day;
            }
            System.out.printf("Profit: %.2f %nBuy day: %d %nSell day: %d" , bestProfit, buyD, sellD);

            valid = false; //leave the loop to end program
        }
        sc.close();
    }
}//remove package !!!!! Makes sure formating of input is correct