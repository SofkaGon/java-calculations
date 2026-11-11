public class MaxInput {

    public static String calculate(double[] numbers) {

        double number = 0;
        double max = number;
        int nCounter = 0;

        for (int c = 0; c < numbers.length; c++) {

            number = numbers[c];
            nCounter++;

            if (number > max || nCounter == 1) {
                max = number;
            }
        }

        if (nCounter == 0) {
            return "No numbers were entered";
        }
        else {
            return String.format(java.util.Locale.US,
                "Numbers entered: %d%nMaximum: %.2f",
                nCounter, max);
        }
    }
}