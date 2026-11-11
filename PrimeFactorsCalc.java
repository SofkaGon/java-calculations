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
    public static int NextPrimeDevision(int lastPrime, int n){
        int nextDevision = NextPrime(lastPrime);
        while(nextDevision < n){
            if (n % nextDevision == 0){
                return nextDevision;
            }
            nextDevision = NextPrime(nextDevision);
        }
        return n;
    }
    public static String calculate(int n){
        int OrgN = n; //original N
        int devisionN = NextPrimeDevision(1, n);

        if (devisionN == n && n!= 1){
           return n + "=" + n + "\nDivisors: 2\nPrime";
        }
        if (devisionN < 2){
            return "n must be 2 or greater ";
        }
        String result = OrgN + " = ";
        int devisionC = 1;
        boolean firstFactor = true;
        while (n > 1){
            int powerC = 1;
            n = n/devisionN;
            while(n % devisionN == 0){
                powerC++;
                n = n/devisionN;
            }
            if (firstFactor == false){
                result = result + " x ";
            }
            if (powerC == 1){
                result = result + devisionN;
            }
            else{
                result = result + devisionN + "^" + powerC;
            }
            firstFactor = false;
            devisionN = NextPrimeDevision(devisionN, n);
            devisionC = devisionC * (powerC + 1);
        }
        result = result + "\nDivisors:" + devisionC;
        result = result + "\nNot prime";
        return result;
    }
}
