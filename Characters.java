public class Characters {
    public static void main(){
        String word = "hello world!";
        int index = 1; while(index < word.length()){ //word.lenght gives the lenght
            if(index == word.length()-1){
                System.out.print(word.charAt(index) ); //word.charAt gives the character at index
            }
            System.out.print(word.charAt(index) + "-"); //word.charAt gives the character at index
            //word.IndexOf(string) index of the first accuorance of string
            index++;
        }
    }
}
