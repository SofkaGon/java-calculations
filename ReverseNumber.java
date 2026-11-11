public class ReverseNumber {
    public static String calculate(int a) {

        int n = a;
        int b = 0;
        int c = 0;

        while (n > 0) {
            b = n % 10;
            c = c * 10 + b;
            n = n/10;
        }
        return "" + c;//"" to convert output displayed into string

    }
}
