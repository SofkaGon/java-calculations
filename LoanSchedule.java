import java.util.Scanner;

public class LoanSchedule {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in); 
        //System.out.println("Please enter borrowed amount");
        double P = sc.nextDouble();
        //System.out.println("Please enter procantage intrest");
        double R = sc.nextInt();
        //System.out.println("Please enter monthly payment");
        double M = sc.nextInt();

        boolean payment = true;
        int month = 0;
        double totalIntrest = 0;
        double totalPaid = 0;
        double monthlyRate = R/12 * 0.01;
        double intrest = monthlyRate * P;
        double BAI = P;//balanceAfterIntrest

        if (M <= intrest){
            System.out.println("Payment too small - loan will never be paid off");
            payment = false;
        }

        while (payment == true){
            while (M < BAI){
                month ++;
                System.out.printf("%n%d ", month);
                intrest = monthlyRate * BAI;
                System.out.printf(" %.2f ", intrest);
                BAI = BAI + intrest;
                System.out.printf(" %.2f ", BAI);
                BAI = BAI - M;
                System.out.printf(" %.2f ", M);
                System.out.printf(" %.2f ", BAI);
                totalIntrest = totalIntrest + intrest;
                totalPaid = totalPaid + M;
            }
            if (BAI == 0){
                payment = false;
                System.out.printf("%nMonths: %d ", month);
                System.out.printf("%nTotal interest: %.2f ", totalIntrest);
                System.out.printf("%nTotal paid: %.2f ", totalPaid);
            }
            else{
                intrest = monthlyRate * BAI;
                BAI = BAI + intrest;
                if (BAI <= M){
                    month ++;
                    System.out.printf("%n%d ", month);  
                    System.out.printf(" %.2f ", intrest);
                    System.out.printf(" %.2f ", BAI);
                    System.out.printf(" %.2f ",BAI);
                    System.out.printf(" 0.00 ");
                    totalIntrest = totalIntrest + intrest;
                    totalPaid = totalPaid + BAI;
                    System.out.printf("%nMonths: %d ", month);
                    System.out.printf("%nTotal interest: %.2f ", totalIntrest);
                    System.out.printf("%nTotal paid: %.2f ", totalPaid);
                    payment = false;
                } 
            }
        }
        sc.close();
    }
}