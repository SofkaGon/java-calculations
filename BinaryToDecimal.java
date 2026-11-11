public class BinaryToDecimal {
    public static void main (){
    int number = 1000110111;
    int original = number;
    int decimalNumber = 0;
    int digitValue = 1;
    final int BASE = 2;


    while (number != 0){
    int lastDigit = number % 10;
    decimalNumber = decimalNumber + lastDigit * digitValue;
    number = number/10;
    digitValue = digitValue * BASE;
    }




    System.out.printf("Number %d (Base %d) is %d  in decimal(Base 10)", original,  BASE, decimalNumber);


    }

}
