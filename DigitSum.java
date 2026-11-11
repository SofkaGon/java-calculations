public class DigitSum {
    public static String calculate(int n) {//we are taking string as the output and int as users input from main

        int sum = 0;
        int d = 0;
        String output = "";//assign string for outputs
        if (n <= 0){
            return "Please enter a positive whole number.";
        }
        else {
            while (n >= 10) {
                while (n != 0){
                    d = n % 10;
                    sum = sum +d;
                    n = n/10;
                    output = output + sum;
                    if (n != 0){
                        output = output + " -> ";
                    }

                }
                //reasigns n to continue adding digits until single digit
                n =sum;
                sum =0;
                output = output + "\n";
            }
            output = output + "Final result: " + n;
        }   
        return output;
    }

}
