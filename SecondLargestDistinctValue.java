public class SecondLargestDistinctValue {
    public static String calculate (int[] values) {
        if (values == null || values.length < 2){
            return String.valueOf(-1);
        }
    

        int counter = 2;
        int max1 = 0;
        int max2 = 0;
        int a = values[0];
        int b = values[1];

        
        if (a >= b) {
            max1 = a;
            max2 = b;
        }
        else {
            max1 = b;
            max2 = a;
        }

        while (counter < values.length) {
            int c = values[counter];

            if (c > max1) {
                max2 = max1;
                max1 = c;
            }
            else if (c > max2) {
                max2 = c;
            }

            counter++;
        }

        if (max1 == max2){
            return String.valueOf(-1);
        }
        else{
            return String.valueOf(max2);
        }

    }
}
