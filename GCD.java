public class GCD {
    public static String calculate(int a , int b) {

        int value1 = a;
        int value2 = b;
        

        if (value2 > value1){
            value1 = b;
            value2 = a;
        }

        int d = value2;

        while (value2 > 0) {
            d = value1 % value2;
            
            value1 = value2;
            value2 = d;
        }
        return String.valueOf(value1);

        }

}
