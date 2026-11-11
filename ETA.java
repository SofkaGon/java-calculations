public class ETA {

    public static String calculate(int velocity, int distance) {

        // calculate how long it takes to go the distance
        // formula is time = distance / velocity
        // cast it to double by brackets in front of variable

        if (velocity <= 0 || distance < 0) {
            return "Invalid input";
        }

        double time = (double) distance / velocity;

        time = time * 1000;

        int seconds = (int) time / 1000;
        int miliseconds = (int) time % 1000;

        return "It takes " + seconds + " seconds and "
                + miliseconds + " milliseconds";
    }
}
