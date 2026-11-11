
public class BankAccountCalc {

    public static String calculate(double balance, int N, String[] types, double[] amounts) {

        boolean reject = false;
        int c = 0; // count
        double lowestBalance = balance;
        int Dcounter = 0; // counter for deposits
        int Wcounter = 0; // counter for withdrawals
        int rejected = 0;
        double feesPayed = 0;
        double fee = 0;

        String result = "";

        while (c < N) {

            String type = types[c];
            double amount = amounts[c];

            if (type.equals("D") && reject == false) {

                if (amount <= 0) {
                    reject = true;
                }
                else {
                    balance = balance + amount;
                    Dcounter++;
                }
            }

            else if (type.equals("W") && reject == false) {

                if (amount <= 0) {
                    reject = true;
                }
                else {
                    fee = 0;

                    if (Wcounter >= 3) {
                        fee = 2.50;
                    }

                    double allow = balance - amount - fee;

                    if (allow < 0) {
                        reject = true;
                    }
                    else {
                        balance = allow;
                        feesPayed = feesPayed + fee;
                        Wcounter++;

                        if (balance < lowestBalance) {
                            lowestBalance = balance;
                        }
                    }
                }
            }

            else {
                reject = true;
            }

            if (reject == true) {
                rejected++;
            }

            reject = false;
            c++;
        }

        result = result + String.format(java.util.Locale.US,
            "Final balance: %.2f%n", balance);

        result = result + String.format(java.util.Locale.US,
            "Lowest balance: %.2f%n", lowestBalance);

        result = result + String.format(java.util.Locale.US,
            "Deposits: %d%n", Dcounter);

        result = result + String.format(java.util.Locale.US,
            "Successful withdrawals: %d%n", Wcounter);

        result = result + String.format(java.util.Locale.US,
            "Rejected transactions: %d%n", rejected);

        result = result + String.format(java.util.Locale.US,
            "Total fees: %.2f", feesPayed);

        return result;
    }
}