public class ETA {
    public static void main(){
        int velocity = 20;
        int distance = 110;
        //calculate and print how long does it take to go the distance
        //formula is time = distance / velocity
        //cast it to double by brackets infront of variable
        double time = (double)distance / velocity;

        
        time = time * 1000;
        int seconds = (int) time / 1000;
        int miliseconds = (int) time % 1000;

        System.out.println("it takes " + seconds + " seconds " + " and " + miliseconds + " miliseconds");

    }
}
