public class CharactersForlLoops {

    //for loops > for(initialization,condition,iteration)
    public static void main(){
        String word = "hello world!";
        //word.lenght gives the lenght
            
        for(int index = 0; index < word.length() ; index++){
            if(index == word.length()-1){
                System.out.print(word.charAt(index) ); //word.charAt gives the character at index
            }
            else{
            System.out.print(word.charAt(index) + "-"); //word.charAt gives the character at index
            //word.IndexOf(string) index of the first accuorance of string
            }
        }
    }
}
