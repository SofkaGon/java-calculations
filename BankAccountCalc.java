import java.util.Scanner;//import library for scanner
public class BankAccountCalc {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in); 
        //System.out.println("Please enter initial balance");
        double balance = sc.nextDouble();
        //System.out.println("Please enter amount of operations");
        int N = sc.nextInt();

        boolean reject = false;
        int c = 0;//count
        double lowestBalance = balance;
        int Dcounter = 0;//counter for deposits
        int Wcounter = 0;//counter for withdrawals
        int rejected = 0;
        double feesPayed = 0;
        double fee = 0;

        while (c < N){
            //System.out.println("Please W for withdrawl and D for Deposit");
            String t = sc.next();
            String type = t;
            Double amount = sc.nextDouble();


            if (type.equals("D") && reject == false) {
                //System.out.println("Enter amount to be deposited");
                if (amount <= 0) {
                    reject = true;
                }
                else{
                    balance = balance + amount;
                    Dcounter ++;
                }
            }
            else if (type.equals("W") && reject == false){
                //System.out.println("Enter amount to be withdrawned");
                if (amount <= 0) {
                    reject = true;
                }
                else{
                    if (Wcounter >= 3){
                        fee = 2.50;
                    }
                    double allow = balance - amount - fee;
                    if (allow < 0){
                        reject = true;
                    }
                    else{
                        balance = allow;
                        feesPayed = feesPayed + fee;
                        Wcounter ++;

                        if (balance < lowestBalance){
                            lowestBalance = balance;
                        }
                    }
                }
            }
            else{
                reject = true;
            }
            
            if (reject == true){
                rejected ++;
            }

            reject =false;
            c++;
        }
        System.out.printf("Final balance: %.2f %nLowest balance: %.2f %nDeposits: %d %nSuccessful withdrawals: %d %nRejected transactions: %d %nTotal fees: %.2f ", balance ,lowestBalance , Dcounter, Wcounter, rejected, feesPayed );
        sc.close();
    }
}
