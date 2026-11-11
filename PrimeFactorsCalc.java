import java.util.Scanner;//import library for scanner
public class PrimeFactorsCalc {
    public static int NextPrime(int lastPrime){
        if (lastPrime == 1){
            return 2;
        }
        if (lastPrime == 2){
            return 3;
        }
        int currentV = lastPrime + 2;
        int checkPrime = 3;
        while (checkPrime < lastPrime){
            if (currentV % checkPrime == 0){
                currentV = currentV + 2;
                checkPrime = 3;
            }
            else{
                checkPrime = NextPrime(checkPrime);
            }
        }
        return currentV;
    }
    public static int NextPrimeDevision(int lastPrime, int N){
        int nextDevision = NextPrime(lastPrime);
        while(nextDevision < N){
            if (N % nextDevision == 0){
                return nextDevision;
            }
            nextDevision = NextPrime(nextDevision);
        }
        return N;
    }
    public static void main(){
        Scanner sc = new Scanner(System.in); 
        //System.out.println("Please enter the number");
        int N = sc.nextInt();  
        int OrgN = N; //original N
        int devisionN = NextPrimeDevision(1, N);
        if (devisionN == N && N!= 1){
            System.out.printf("%d = %d %nDivisors: 2%nPrime", N);
            return;
        }
        if (devisionN < 2){
            System.out.printf("N must be 2 or greater ");
            return;
        }
        System.out.printf("%d = ", OrgN);
        int devisionC = 1;
        boolean firstFactor = true;
        while (N > 1){
            int powerC = 1;
            N = N/devisionN;
            while(N % devisionN == 0){
                powerC++;
                N = N/devisionN;
            }
            if (firstFactor == false){
                System.out.printf(" x ");
            }
            if (powerC == 1){
                System.out.printf("%d", devisionN);
            }
            else{
                System.out.printf("%d^%d", devisionN, powerC);
            }
            firstFactor = false;
            devisionN = NextPrimeDevision(devisionN, N);
            devisionC = devisionC * (powerC + 1);
        }
        System.out.printf("%nDivisors: %d %nNot prime", devisionC);
        return;
    }
}
