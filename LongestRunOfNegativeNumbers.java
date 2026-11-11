public class LongestRunOfNegativeNumbers {
    public static String calculate(int[] numbers) {
        int n = numbers.length;

        if (n == 0){
            return "Please enter at least one number";
        } 

        int c = 0;
        int lenght = 0;
        int b = lenght;

        while (c < n) {

            if (numbers[c] < 0){
                lenght ++;
            }
            else{
                if ( lenght > b){
                    b = lenght;
                }
                lenght = 0;
            }
            
            c++;
        }

        if (lenght > b){
            b = lenght;
        }

        return "Longest run of negative numbers: " + b;

    }
}
