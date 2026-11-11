public class ClosestToZero {
    public static int calculate(int[] numbers) {

        int cDistance = 0;
        int d = 0;

        int min = numbers[0];
        cDistance = Math.abs(numbers[0]);
        for(int i = 1; i < numbers.length; i++){
            d = (int) Math.abs((long) numbers[i]);
            if (d < cDistance) {
                cDistance = d;
                min = numbers[i];
            }
            else if (d == cDistance){
                if (numbers[i] > 0){
                    min = numbers[i];
                }
            }
        }
        return min;
    }
}
