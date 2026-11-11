public class LongestIncreasingRun {
   public static String calculate(int[] numbers){
        int n = numbers.length;

        if (n == 0){
            return "Please enter at least one number";
        } 

        int c = 1;
        int lenght = 1;
        int longest = 1;
        int a = numbers[0];
        int b = (n > 1) ? numbers[1] : numbers[0];

        while (c < n) {

            if (a < b){
                lenght++;
            }

            else {
                if (lenght > longest){
                    longest = lenght;
                }
                lenght = 1;
            }
            
            a = b;
            c++;
            if (c < n){
                b = numbers[c];
            }
        }

        if (lenght > longest){
            longest = lenght;
        }

        return "Longest increasing run: " + longest;
   } 
}
