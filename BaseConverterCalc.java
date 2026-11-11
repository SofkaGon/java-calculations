import java.util.Scanner;//import library for scanner
public class BaseConverterCalc {
    public static void main (){
        Scanner sc = new Scanner(System.in); 
        //System.out.println("Please enter value of number to convert");
        int V = sc.nextInt();
        //System.out.println("Please enter original base");
        int B = sc.nextInt();
        //System.out.println("Please enter desired base for converting");
        int C = sc.nextInt();


        if (V == 0){
            System.out.println("0");
        }
        //if checks if both bases are between 2 and 9
        else if (B < 2 || B > 9 || C < 2 || C > 9){
            System.out.println("Invalid base");
        }

        else{
            long vAsDecimal = 0; //renamed from deciamlN to be more understandable
            long digit = 1; //renamed from digitV to simplify
            long lastDigit = 0; //renamed from lastD to explain what d stands for

            while (V != 0){
                lastDigit = V % 10;

                if (lastDigit >= B){
                    System.out.printf("Invalid digit for base %d" , B);
                    return; // leave and end 
                }

                vAsDecimal =  vAsDecimal + lastDigit * digit;
                V = V /10;
                digit = digit * B;
            }

            long finalN = 0; //renamed from finals as I got an error
            long rest = 0;
            long position = 1;
            long number = vAsDecimal;

            while (number != 0){
                rest = number % C;
                finalN = position * rest + finalN;
                number = number / C;
                position = position * 10;
            }

            System.out.printf("%d" , finalN);
        }
        sc.close();
    }
}
