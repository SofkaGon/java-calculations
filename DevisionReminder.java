public class DevisionReminder {
    public static String calculate(int a, int b){
        if (b == 0) {
            return "Cannot divide by zero";
        }

        int result = a/b;
        int rest = a % b;

        return String.format(java.util.Locale.US, "The result of %d / %d is %d and the remainder is %d", a, b, result, rest);
    }
}
