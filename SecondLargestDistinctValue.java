public class SecondLargestDistinctValue {
/** 
    @param values The array of integers to search from
    @return Returns the second largest distinct values or if second value doesn't exist it will return -1
*/
    public static int whatLargestDistinctValue (int[] values) {
        if (values == null || values.length < 2){
            return -1;
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
            return -1;
        }
        else{
            return max2;
        }

    }
}
