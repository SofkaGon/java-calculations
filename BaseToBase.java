public class BaseToBase {
   //using recursion which means function calling on itself, because I might face overflow trying to convert the whole number, but this way it will print out each digit 
    public static String printToBase (long number, int base){
        if(number >= base){
            return printToBase(number / base, base) + (number % base);
        }
        return "" + (number % base);
    }
    public static String calculate(long V, int B, int C) {

        //if checks if both bases are between 2 and 9
        if (B < 2 || B > 9 || C < 2 || C > 9){
            return "Invalid base";
        }

        else if (V == 0){
            return "0";
        }


        else{
            long vAsDecimal = 0; //renamed from deciamlN to be more understandable
            long digit = 1; //renamed from digitV to simplify
            long lastDigit = 0; //renamed from lastD to explain what d stands for

            while (V != 0){
                lastDigit = V % 10;

                if (lastDigit >= B){
                   return "Invalid digit for base " + B;
                }

                vAsDecimal =  vAsDecimal + lastDigit * digit;
                V = V /10;
                digit = digit * B;
            }
            return printToBase(vAsDecimal, C);

        }
    }
}
