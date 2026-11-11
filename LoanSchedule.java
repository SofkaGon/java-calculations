public class LoanSchedule {

    public static String calculate(double P, double R, double M) {

        boolean payment = true;
        int month = 0;
        double totalIntrest = 0;
        double totalPaid = 0;
        double monthlyRate = (R / 100.0) / 12;
        double intrest = monthlyRate * P;
        double BAI = P; // balanceAfterIntrest

        StringBuilder result = new StringBuilder();

        if (M <= intrest) {
            result.append("Payment too small - loan will never be paid off");
            payment = false;
        }

        if (payment == true) {

            while (M < BAI + monthlyRate * BAI) {

                month++;

                intrest = monthlyRate * BAI;

                result.append(String.format(java.util.Locale.US,
                    "%d %.2f %.2f %.2f %.2f%n",
                    month, intrest, BAI + intrest, M,
                    BAI + intrest - M));

                BAI = BAI + intrest;
                BAI = BAI - M;

                totalIntrest = totalIntrest + intrest;
                totalPaid = totalPaid + M;
            }

            // Final month
            intrest = monthlyRate * BAI;
            BAI = BAI + intrest;

            month++;

            result.append(String.format(java.util.Locale.US,
                "%d %.2f %.2f %.2f 0.00%n",
                month, intrest, BAI, BAI));

            totalIntrest = totalIntrest + intrest;
            totalPaid = totalPaid + BAI;

            result.append(String.format(java.util.Locale.US,
                "Months: %d%n", month));

            result.append(String.format(java.util.Locale.US,
                "Total interest: %.2f%n", totalIntrest));

            result.append(String.format(java.util.Locale.US,
                "Total paid: %.2f", totalPaid));
        }

        return result.toString();
    }
}