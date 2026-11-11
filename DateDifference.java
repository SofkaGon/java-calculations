public class DateDifference {

    public static boolean isLeapY(int y) {
        boolean result = false;
        if (y % 4 == 0 && y % 100 != 0) {
            result = true;
        }
        if (y % 400 == 0) {
            result = true;
        }
        return result;
    }

    public static int totalDaysInM(int m, int y) {
        if (m == 2) {
            boolean leapY = isLeapY(y);
            if (leapY == true) {
                return 29;
            }
            else {
                return 28;
            }
        }
        if (m == 4 || m == 6 || m == 9 || m == 11) {
            return 30;
        }
        else {
            return 31;
        }
    }

    public static boolean isValidDate(int d, int m, int y) {

        if (y < 1900) {
            return false;
        }

        if (m <= 0 || m > 12) {
            return false;
        }

        int totalMonthD = totalDaysInM(m, y);

        if (d <= 0 || d > totalMonthD) {
            return false;
        }
        else {
            return true;
        }
    }

    public static int daysFromBeggining(int d, int m, int y) {
        int allDays = 0;

        while (m > 1) {
            allDays = allDays + totalDaysInM(m - 1, y);
            m--;
        }

        allDays = allDays + d;
        return allDays;
    }

    public static String zellers(int d, int m, int y) {
        String dayOfWeek;
        int day = d;
        int month = m;

        if (month == 1) {
            month = 13;
            y--;
        }
        else if (month == 2) {
            month = 14;
            y--;
        }

        int year = y % 100;
        int century = y / 100;

        int dayWeek = day + (13 * (month + 1) / 5) + year
                    + year / 4 + century / 4 - 2 * century;

        dayWeek = (7 + (dayWeek % 7)) % 7;

        if (dayWeek == 0) {
            dayOfWeek = "Saturday";
        }
        else if (dayWeek == 1) {
            dayOfWeek = "Sunday";
        }
        else if (dayWeek == 2) {
            dayOfWeek = "Monday";
        }
        else if (dayWeek == 3) {
            dayOfWeek = "Tuesday";
        }
        else if (dayWeek == 4) {
            dayOfWeek = "Wednesday";
        }
        else if (dayWeek == 5) {
            dayOfWeek = "Thursday";
        }
        else if (dayWeek == 6) {
            dayOfWeek = "Friday";
        }
        else {
            dayOfWeek = "Error";
        }

        return dayOfWeek;
    }

    public static String calculate(int firstDay, int firstMonth, int firstYear,
                                   int secondDay, int secondMonth, int secondYear) {

        boolean validFirstDate = isValidDate(firstDay, firstMonth, firstYear);
        boolean validSecondDate = isValidDate(secondDay, secondMonth, secondYear);

        if (validFirstDate != true || validSecondDate != true) {
            return "Invalid date";
        }

        int firstDaysFromBegining =
            daysFromBeggining(firstDay, firstMonth, firstYear);

        int secondDaysFromBegining =
            daysFromBeggining(secondDay, secondMonth, secondYear);

        if (secondYear == firstYear) {
            if (secondDaysFromBegining < firstDaysFromBegining) {
                return "Second date is before first date";
            }
        }
        else if (secondYear < firstYear) {
            return "Second date is before first date";
        }

        boolean leapFirstY = isLeapY(firstYear);

        int firstDays;
        int secondDays = secondDaysFromBegining;

        if (leapFirstY == true) {
            firstDays = 366 - firstDaysFromBegining;
        }
        else {
            firstDays = 365 - firstDaysFromBegining;
        }

        int yearsInBetween = (secondYear - firstYear) - 1;
        int c = 1;
        int daysInBetween = 0;

        while (c <= yearsInBetween) {
            boolean leapY = isLeapY(firstYear + c);

            if (leapY == true) {
                daysInBetween = daysInBetween + 366;
            }
            else {
                daysInBetween = daysInBetween + 365;
            }

            c++;
        }

        int allDaysInBetween;

        if (firstYear == secondYear) {
            allDaysInBetween =
                secondDaysFromBegining - firstDaysFromBegining;
        }
        else {
            allDaysInBetween = daysInBetween + firstDays + secondDays;
        }

        String firstDayofWeek =
            zellers(firstDay, firstMonth, firstYear);

        String secondDayofWeek =
            zellers(secondDay, secondMonth, secondYear);

        String result = "";

        result = result + "Days between: " + allDaysInBetween + "\n";
        result = result + "First date: " + firstDayofWeek + "\n";
        result = result + "Second date: " + secondDayofWeek;

        return result;
    }
}