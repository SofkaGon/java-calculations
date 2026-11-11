public class SecondsHM {

    public static void main(){
        //using constant and variables calculate how many seconds are in a day
        final int HOURS_IN_A_DAY = 24;
        final int MINS_IN_AN_HOUR = 60;
        final int Sec_IN_A_MINUTE = 60;
        int result = HOURS_IN_A_DAY * MINS_IN_AN_HOUR * Sec_IN_A_MINUTE;
        
        System.out.println(result);
    }
}
