
public class LargestSumOfTwoConsecutiveNumbers {
    public static String calculate(int[] numbers) {//use array for multiple inputs, instead of looping next input

        int n = numbers.length;
        int x = 1;
        int max = numbers[0] + numbers[1] ;
        int maxa = numbers[0];
        int maxb = numbers[1];
        int sum = 0;
        
        if (n < 2){
            return "Please enter at least 2 numbers";
        }

        while (x < n - 1){
            sum = numbers[x] + numbers[x + 1];//x is index of the array

            if (sum > max){
                max = sum;
                maxa = numbers[x];
                maxb = numbers[x + 1];
            }
            x++;
        }

        return "max " + max + " from pair " + maxa + " + " + maxb;

    }
}
