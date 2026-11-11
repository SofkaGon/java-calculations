public class MultiplicationTable {
    public static String calculate(int n) {
            
        int c = 1;
        int result = 0;
        String output = "";


        while (c <= 10) {
            result = n * c;
            output = output + n + " * " + c + " = "  + result + "\n";
            c++;
        }
        return output;

    }
}
