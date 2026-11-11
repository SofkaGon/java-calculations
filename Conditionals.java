public class Conditionals {
    public static void main(){
        String level = "Adv";
        int grade = 67;
        String letter;
        if (grade >=90){
            letter = "A";
        }
        else if ( grade >= 80){
            letter = "B";
        }
        else if ( grade >= 70){
            letter = "c";
        }
        else if ( grade >= 60){
            letter = "D";
        }
        else if ( grade >= 50){
            letter = "E";
        }
        else{
            letter = "F";
        }
        if (level == "Adv"){
            System.out.print("level: Adv, letter: "+ letter);
        }
        else{
            System.out.print("letter: "+ letter);
        }
    }
}
