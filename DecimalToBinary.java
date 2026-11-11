public class DecimalToBinary {
    public static void main (){
        int number = 34;
        int base = 3;
        int finals = 0;
        int rest = 0;
        int position = 1;

        while (number != 0 ){
            rest = number % base;
            finals = position * rest  + finals;
            number = number / base;
            position = position * 10;
        }



        System.out.printf(" the result of base %d is %d", base, finals);

    

    }
}
