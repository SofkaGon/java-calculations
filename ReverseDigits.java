public class ReverseDigits {
    public static void main(){
        int original = 12;
        int d1 = original;
        int d2 = 0;
     
        int result = 0;

        d1 = d1 % 10;
        d2 = original / 10;
        result = d1 * 10 + d2;

        System.out.printf("result: %d ", result);

        int original3 = 123;
        int d13 = original;
        int d23 = 0;
        int d33 = 0;

     
        int result3 = 0;

        //d13 = d13 % 10;
        //d23 = original3 / 10;
        //d33 = original3 / 100;
        //result3 = d13 * 100 + d23 * 10 + d33;

        while(original3 != 0){
            result3 = (result3 * 10) + (original3 % 10);
            original3 = original3 / 10;

        }

        System.out.printf("result: %d ", result3);

    }
}
