public class PositionLargestValue {
    public static String calculate(int[] numbers ) {
        
        int n = numbers.length;

        int position = 1;
        int maxPosition = 1;
        int max = numbers[0];
        int c = 1;

        while (c < n){
            position++;

            if (numbers[c] > max){
                max = numbers[c];
                maxPosition = position;
            }
            c++;            
        }


        return "largest " + max + " at position " + maxPosition ;
    }
}