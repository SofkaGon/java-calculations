public class BestTrade {
    public static String calculate(double[] numbers){
        
        int days = numbers.length;

            if (days < 2){
                return "Invalid input, please input at least 2 days";
            }

            int day = 1;

            double minP = numbers[0];
            int buyD = day;

            double bestProfit = numbers[1] - minP;
            int sellD = 2;

            day ++;

            while (day <= days){
                double p = numbers[day -1];
                double profit = p - minP;

                if (profit >bestProfit){
                        buyD = findBuyDay(numbers, day);
                        sellD = day;
                        bestProfit = profit;
                }
                if (p < minP){
                    minP = p;
                }
                day ++;
            }
            return String.format("Profit: %.2f%nBuy day: %d%nSell day: %d",
            bestProfit, buyD, sellD);        
    }

    private static int findBuyDay(double[] numbers, int sellDay){
        double minP = numbers[0];
        int buyD = 1;
        for (int i = 1; i < sellDay - 1; i++){
            if ( numbers[i] < minP){
                minP = numbers[i];
                buyD = i + 1;
            }
        }
        return buyD;
    }
}