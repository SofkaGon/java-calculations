// All lesson content lives here. To add a lesson, add one object to LESSONS
// (e.g. Example1, TestCalculator and Class can be added the same way).
// Code is stored with String.raw so \n, \t and \\ appear exactly as in the .java file.
//
// Fields: id, module, title, source, concepts[], intro, code, explain[],
//         breakdown[[snippet, text]], lookCloser[] (optional), exercise

const LESSONS = [
  /* ===== Module 1 ===== */
  {
    id: "hello-world",
    module: "1. Getting Started",
    title: "Your first program",
    source: "Lesson1.java",
    concepts: ["class", "main", "print", "println", "escape sequences", "comments", "data types", "variables"],
    intro: "Every Java program starts with a class and a main method. This lesson prints text, creates two variables and shows how special characters work.",
    code: String.raw`
class Lesson1{
    public static void main(){
        System.out.println("Hello World" );
        System.out.println('H');
        int a = 5;
        int b = 10;

        // comments: println is a function, functions are lowercase
        // System.out is a library of functions so it needs to be capitalized

        System.out.print("First \"number\" : " + a + "\n");
        System.out.print("Second \t number: " + b + "\n");

        System.out.print("Hi\\Bye");

        //Data types: int, double, char, boolean, String, float
        //int: whole numbers, double: decimal numbers, char: single character, boolean: true or false, String: text, float: decimal numbers with less precision

        //single quotation marks are used for char, double quotation marks are used for String
    }
}`,
    explain: [
      "The program runs the lines inside main from top to bottom. println prints text and then moves to a new line; print prints text and stays on the same line.",
      "int a = 5; creates a variable named a that stores the whole number 5. The + operator joins text and values together, so \"First \\\"number\\\" : \" + a builds one longer piece of text.",
      "Inside quotes, a backslash starts an escape sequence: \\\" prints a quote mark, \\n starts a new line, \\t adds a tab, and \\\\ prints a single backslash.",
      "Lines starting with // are comments. Java ignores them; they are notes for people reading the code.",
    ],
    breakdown: [
      ["class Lesson1", "Declares a class. Every Java program lives inside one."],
      ["public static void main()", "The method where the program begins. void means it returns nothing."],
      ["System.out.println(...)", "Prints the value in the brackets, then ends the line."],
      ["'H' vs \"H\"", "Single quotes make a char (one character); double quotes make a String (text)."],
      ["int a = 5;", "type  name  =  value  ;  — every statement ends with a semicolon."],
    ],
    lookCloser: [
      "Your comment says println is a function. In Java the correct word is method. System is a class, and out is an object inside it that does the printing.",
      "The usual form of main is public static void main(String[] args). Newer Java versions allow shorter forms, and your files use both, so check which one your course or IDE expects.",
    ],
    exercise: "Print your name on one line and your favourite number on the next, with a tab between a label and the value (for example Name:<tab>Sam). Then print a backslash and a quote mark.",
  },
  {
    id: "print-stars",
    module: "1. Getting Started",
    title: "Printing patterns with text",
    source: "PrintStars.java",
    concepts: ["print", "println", "\\n", "string concatenation", "patterns"],
    intro: "Four ways to print the same kind of star pattern, using only print and println. Later you will do this with loops.",
    code: String.raw`
public class PrintStars {
    public static void main(){
        System.out.println("*" );
        System.out.println("**" );
        System.out.println("***" );
        System.out.println("****" );
        System.out.println("*****" );

        System.out.print("*" + "\n" + "**" + "\n" + "***" + "\n" + "****" + "\n" + "*****" );
        //Don't leave space between \n and the next character, otherwise it will print a space before the next character
        System.out.print("\n* \n** \n*** \n**** \n*****" );

        System.out.print("\n    * \n   *** \n  ***** \n ******* \n*********" );
    }
}`,
    explain: [
      "The first block uses five println calls, one row each. The second does the same job with one print and \\n joined by +.",
      "The third block puts the whole pattern in one string. Spaces matter: a space after \\n adds a space at the start of the next row, and a space before \\n adds one at the end of the row.",
      "The last block pads each row with leading spaces so the stars form a centred pyramid (1, 3, 5, 7, 9 stars).",
    ],
    breakdown: [
      ["\"\\n\"", "The new-line character. print + \\n behaves like println."],
      ["\"*\" + \"\\n\" + \"**\"", "+ joins strings into one longer string."],
      ["\"\\n    * \"", "Leading spaces shift the stars to the right."],
    ],
    lookCloser: [
      "Count the repeated work: this is the problem loops solve. Keep this file in mind for the Loops lesson.",
    ],
    exercise: "Print a pyramid with 6 rows (1, 3, 5, 7, 9, 11 stars) without using a loop. Notice how much typing it takes.",
  },

  /* ===== Module 2 ===== */
  {
    id: "data-types",
    module: "2. Variables and Data Types",
    title: "Whole numbers, operators and decimals",
    source: "DataTypes.java",
    concepts: ["int", "double", "++", "--", "+=", "*=", "/=", "integer division", "printf"],
    intro: "How int variables change, what shortcut operators do, and why dividing whole numbers gives surprising answers.",
    code: String.raw`
public class DataTypes {
    public static void main(){
        // whole numbers = int
        int x = 10;
        int y = -15;
        System.out.printf("%d, %d", x, y);

        // ++ and -- operators
        x++;
        y--;
        System.out.printf("%d, %d", x, y); // x: 11, y: -16

        // +=, -+, *=, /= operators
        x = 5;
        x *= 10; 
        y = 3;
        y /= 2;
        System.out.printf("%d, %d", x, y); // x: 50, y: 1

        //Dividing integers : one must be a double and also the variable should be double
        double z = 5.0 / 2.0;
        System.out.printf("z: %05.2f \n", z); // z : 2.50 
    }
}`,
    explain: [
      "x++ adds 1 to x and y-- subtracts 1 from y, so 10 and -15 become 11 and -16.",
      "x *= 10 is short for x = x * 10, so x becomes 50. y /= 2 is y = y / 2. Both are int, so 3 / 2 is 1: the decimal part is thrown away.",
      "To keep the decimal part, use double values: 5.0 / 2.0 is 2.5.",
      "printf formats output. %d prints an int; %05.2f prints a decimal with 2 decimal places, at least 5 characters wide, padded with zeros.",
    ],
    breakdown: [
      ["x++ / y--", "Increase / decrease by 1."],
      ["x *= 10", "Shortcut for x = x * 10. Also +=, -=, /=."],
      ["3 / 2", "Integer division: result is 1, not 1.5."],
      ["%d", "Placeholder for an int."],
      ["%05.2f", "0 = pad with zeros, 5 = minimum width, .2 = two decimals."],
    ],
    lookCloser: [
      "The printf calls have no \\n or space between them, so the output runs together: 10, -1511, -1650, 1... Add \\n to read it more easily.",
      "The comment says z is 2.50, but because of %05.2f the program actually prints 02.50 (width 5, zero padded).",
      "The comment says -+ but the operator is -=.",
    ],
    exercise: "Set int a = 7 and int b = 2. Print a / b, a % b and (double) a / b. Explain each result.",
  },
  {
    id: "rectangle",
    module: "2. Variables and Data Types",
    title: "Doubles, formatting and constants",
    source: "Rectangle.java",
    concepts: ["double", "final", "constants", "Math.PI", "casting", "printf", "format specifiers"],
    intro: "Calculate the area and perimeter of a rectangle and the area of a circle, and format the results neatly.",
    code: String.raw`
public class Rectangle {
    public static void main(){
        //width is 12.4 and Height is 17.8
        double width = 12.4;
        double height = 17.8;

        double area =  width *  height;
        double perimeter = 2 *  width + 2 *  height;

        System.out.println("area: " + area + " perimeter: " + perimeter + "\n");

        System.out.printf("Area is %.2f and Perimeter is %.2f\n", area, perimeter);
        // to add precision use printf and use % for placeholder and x.y for how many places before or decimal spaces after you want

        int radius = 5;
        final double PI = Math.PI;  //constant unchangable variables write final and capital name
        int circleArea = (int)(radius * radius * PI);

        System.out.printf("Area of a circle is %d", circleArea);

        //double/float %f
        // int %d
        //string %s
        // char %c
    }
}`,
    explain: [
      "area = width * height and perimeter = 2 * width + 2 * height, both stored as double because the values have decimals.",
      "println prints the raw double, which can have many decimal places. printf with %.2f rounds to two decimals: Area is 220.72 and Perimeter is 60.40.",
      "final makes a variable a constant: it cannot be changed after it is set. By convention constants are written in CAPITALS.",
      "(int)(...) is a cast. It converts the double result into an int by cutting off the decimals: 25 * π is 78.54..., so circleArea becomes 78.",
    ],
    breakdown: [
      ["double width = 12.4;", "A double stores decimal numbers."],
      ["%.2f", "Print a decimal with 2 digits after the point."],
      ["final double PI", "A constant that cannot be reassigned."],
      ["(int)(expression)", "Cast: convert to int, dropping the decimal part (no rounding)."],
      ["%d  %f  %s  %c", "int, decimal, text, single character."],
    ],
    exercise: "Change the radius to 7.5 (make it a double) and print the circle area with 3 decimals instead of casting to int. Then add the circumference (2 × π × radius).",
  },
  {
    id: "seconds-in-a-day",
    module: "2. Variables and Data Types",
    title: "Naming constants",
    source: "SecondsHM.java",
    concepts: ["final", "constants", "naming", "multiplication"],
    intro: "Use named constants instead of 'magic numbers' to calculate how many seconds are in a day.",
    code: String.raw`
public class SecondsHM {

    public static void main(){
        //using constant and variables calculate how many seconds are in a day
        final int HOURS_IN_A_DAY = 24;
        final int MINS_IN_AN_HOUR = 60;
        final int Sec_IN_A_MINUTE = 60;
        int result = HOURS_IN_A_DAY * MINS_IN_AN_HOUR * Sec_IN_A_MINUTE;
        
        System.out.println(result);
    }
}`,
    explain: [
      "24 hours × 60 minutes × 60 seconds = 86400, so that is what the program prints.",
      "Writing 24 * 60 * 60 would give the same answer, but names like HOURS_IN_A_DAY tell the reader what each number means. Descriptive names make code easier to read and change.",
    ],
    breakdown: [
      ["final int HOURS_IN_A_DAY = 24;", "A constant: set once, never changed."],
      ["HOURS_IN_A_DAY * MINS_IN_AN_HOUR * ...", "Constants can be used in calculations like any variable."],
    ],
    lookCloser: [
      "Sec_IN_A_MINUTE does not follow the convention used by the other two. Constants are normally all capitals: SEC_IN_A_MINUTE.",
    ],
    exercise: "Calculate the number of seconds in a week using constants, then the number of minutes in a year (365 days).",
  },
  {
    id: "user-profile",
    module: "2. Variables and Data Types",
    title: "Strings and printf placeholders",
    source: "USER.java",
    concepts: ["String", "int", "printf", "%s", "%d"],
    intro: "Store text and numbers in variables and insert them into a sentence using printf.",
    code: String.raw`
public class USER {
    public static void main(){
        String name = "Sofiia";
        int age = 00;
        String favCourse = "Gym or Band";

        System.out.printf("Hi, I'm %s , I'm %d years old, and my favorite course are %s ", name, age, favCourse);
    }
}`,
    explain: [
      "name and favCourse are Strings (text) and age is an int. printf replaces each placeholder with the matching value in order: first %s gets name, %d gets age, the second %s gets favCourse.",
      "The number of placeholders must match the number of values, and the type must fit: %s for text, %d for whole numbers.",
    ],
    breakdown: [
      ["String name = \"...\";", "String is a class for text, so it starts with a capital letter."],
      ["%s", "Placeholder for text."],
      ["%d", "Placeholder for a whole number."],
      ["printf(format, a, b, c)", "Values after the format string fill the placeholders in order."],
    ],
    lookCloser: [
      "A leading zero makes a number octal in Java. 00 works and equals 0, but 08 would be a compile error. Write numbers without leading zeros.",
    ],
    exercise: "Add a double variable for your height in metres and print it with 2 decimals in the same sentence.",
  },
  {
    id: "cent-calculator",
    module: "2. Variables and Data Types",
    title: "Division and remainder",
    source: "CentCalculator.java",
    concepts: ["/", "%", "integer division", "remainder", "problem solving"],
    intro: "Break an amount of money into toonies, loonies and leftover cents using integer division and the remainder operator.",
    code: String.raw`
public class CentCalculator {
    public static void main() {
        int cents = 535;
        int original = cents;
        //calculate amount of loonies, toonies, and remaining cents
        //535 cents would be 2 toonies, 1 loonies and 35 cents
        //you need to use / and % operators

        int toonies = cents / 200;
        int rest = cents % 200;

        int loonies = rest / 100;
        rest = rest % 100;

        System.out.println(original + " cents would be - "+"toonies : " + toonies + " loonies : " + loonies + " rest : " + rest);
    }
}`,
    explain: [
      "With whole numbers, / gives how many times one number fits into another (535 / 200 = 2) and % gives what is left over (535 % 200 = 135).",
      "The program takes toonies first (200 cents each). The 135 cents left go through the same steps for loonies (100 cents): 135 / 100 = 1, and 135 % 100 = 35 remains.",
      "Result: 2 toonies, 1 loonie and 35 cents. Larger coins are handled first, and each step works on what is left.",
    ],
    breakdown: [
      ["cents / 200", "Integer division: how many whole 200s fit."],
      ["cents % 200", "Remainder after taking out the 200s."],
      ["rest = rest % 100;", "A variable can be reassigned using its own value."],
    ],
    exercise: "Extend the program to also count quarters, dimes and nickels from the remaining cents.",
  },

  /* ===== Module 3 ===== */
  {
    id: "reading-input",
    module: "3. Reading Input",
    title: "Reading input with Scanner",
    source: "ReadingInput.java",
    concepts: ["Scanner", "nextLine", "nextInt", "import", "equals", "if/else", "printf"],
    intro: "Ask the user for their name, the day and their age, then work out a ticket price.",
    code: String.raw`
import java.util.Scanner;
public class ReadingInput {
    public static void main(){
        //Scanner keyIn = new Scanner(System.in);
        //String sentance = keyIn.nextLine();
        //String word = keyIn.nextLine();
        //int number1 = keyIn.nextInt();
        //double number2 = keyIn.nextDouble();

        Scanner keyIn = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = keyIn.nextLine();
        System.out.print("Enter day of week: ");
        String day = keyIn.nextLine();
        System.out.print("Enter your age: ");
        int age = keyIn.nextInt();

        double price;

        if (day.equals( "Tuesday" ) || day.equals( "tuesday" ) ){
            price = 10;
        }
        else {
            if (age < 13){
                price = 8.65;
            }
            else if (age >= 65){
                price = 9;
            }
            else{
            price = 14;
            }
        }

        System.out.printf("Hi %s, price is $%.2f for age: %d",name, price, age );

        keyIn.close();
    }
}`,
    explain: [
      "import java.util.Scanner; makes the Scanner tool available. new Scanner(System.in) creates a scanner that reads what the user types.",
      "nextLine() reads a whole line as a String. nextInt() reads a whole number. nextDouble() would read a decimal (shown in the comments).",
      "Text is compared with .equals(\"Tuesday\"), not ==. The || means 'or', so both spellings work.",
      "The pricing uses an if inside an else (a nested condition): Tuesday is 10; otherwise the price depends on age.",
    ],
    breakdown: [
      ["import java.util.Scanner;", "Brings in a class from Java's library."],
      ["new Scanner(System.in)", "Creates a reader for keyboard input."],
      ["keyIn.nextLine()", "Reads a full line of text."],
      ["keyIn.nextInt()", "Reads an int but leaves the Enter key in the input."],
      ["day.equals(\"Tuesday\")", "Compares the contents of two Strings."],
      ["keyIn.close();", "Releases the scanner when you are done."],
    ],
    lookCloser: [
      "Because age is read last, nextInt() is safe here. If you called nextLine() after nextInt(), it would read the leftover Enter and return an empty line.",
      "equalsIgnoreCase(\"tuesday\") would replace the two equals calls.",
    ],
    exercise: "Rewrite the Tuesday check using equalsIgnoreCase. Then read the ticket count as an int and print the total cost.",
  },

  /* ===== Module 4 ===== */
  {
    id: "conditionals",
    module: "4. Conditions",
    title: "if / else if chains",
    source: "Conditionals.java",
    concepts: ["if", "else if", "else", "comparison operators", "String comparison", "variables"],
    intro: "Turn a numeric grade into a letter, then print a different message depending on a level.",
    code: String.raw`
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
}`,
    explain: [
      "Java checks the conditions from top to bottom and runs the first block that is true, then skips the rest. 67 is not >= 90, 80 or 70, but it is >= 60, so letter becomes \"D\".",
      "Because the chain is checked in order, you only need >= tests: by the time grade >= 80 is tested, the grade is already known to be below 90.",
      "The second if decides which message to print. With level \"Adv\" the output is: level: Adv, letter: D.",
    ],
    breakdown: [
      ["if (condition) { ... }", "Runs the block when the condition is true."],
      ["else if (condition)", "Checked only if all earlier conditions were false."],
      ["else { ... }", "Runs when nothing above matched."],
      [">=  <=  ==  !=", "Comparison operators."],
    ],
    lookCloser: [
      "level == \"Adv\" compares object references, not text. It happens to work here because both are the same string literal, but use level.equals(\"Adv\") to be safe.",
      "The letter for 70–79 is lowercase \"c\", which is probably a typo for \"C\".",
    ],
    exercise: "Fix the two issues above. Then add an extra level \"Beg\" that prints a message of your choice.",
  },
  {
    id: "grade-class",
    module: "4. Conditions",
    title: "Grades from user input",
    source: "GradeClass.java",
    concepts: ["Scanner", "Integer.parseInt", "if / else if", "ordering conditions"],
    intro: "The same grade idea, but now the number comes from the user.",
    code: String.raw`
import java.util.Scanner;

public class GradeClass {
    public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter number: ");
        int a = Integer.parseInt(sc.nextLine());

        if (a >= 90) {
            System.out.println("A");
        }
         else if (a >= 80) {
            System.out.println("B");
        }
         else if (a >= 70) {
            System.out.println("C");
        }
         else if (a >= 60) {
            System.out.println("D");
        }
         else  {
            System.out.println("F");
        }

        sc.close();
    }
}`,
    explain: [
      "sc.nextLine() reads text and Integer.parseInt(...) converts that text into an int. This is another way to read numbers, and avoids the leftover-Enter problem of nextInt().",
      "The if / else if chain prints exactly one letter. Order matters: if you tested a >= 60 first, every passing grade would print D.",
    ],
    breakdown: [
      ["Integer.parseInt(text)", "Converts text such as \"85\" into the int 85."],
      ["sc.nextLine()", "Reads one line of text."],
    ],
    lookCloser: [
      "Typing abc makes parseInt throw a NumberFormatException and the program stops.",
      "150 prints A and -20 prints F. Nothing checks that the grade is between 0 and 100.",
    ],
    exercise: "Add a check before the chain: if the number is below 0 or above 100, print \"Invalid\" and do not print a letter. Use ||.",
  },
  {
    id: "movie-tickets",
    module: "4. Conditions",
    title: "Booleans and nested conditions",
    source: "MovieTickets.java",
    concepts: ["boolean", "nested if", "double", "printf", "decision logic"],
    intro: "Decide a ticket price using a boolean flag and the visitor's age.",
    code: String.raw`
public class MovieTickets {
    public static void main(){
        //function for buying tickets depending on aga=e
        int age = 50;
        boolean isTuesday = true;
        double price;
        if (isTuesday){
            price = 10;
        }
        else {
            if (age < 13){
                price = 8.65;
            }
            else if (age >= 65){
                price = 9;
            }
            else{
            price = 14;
            }
        }
        System.out.printf("price is $%.2f for age: %d", price, age );
    }
}`,
    explain: [
      "A boolean holds only true or false. if (isTuesday) is a shortcut for if (isTuesday == true).",
      "On Tuesday the price is always 10. Otherwise the program goes into a second, nested if to look at age: under 13 pays 8.65, 65 and over pays 9, everyone else 14.",
      "With age 50 on a Tuesday the output is: price is $10.00 for age: 50.",
    ],
    breakdown: [
      ["boolean isTuesday = true;", "A variable that can only be true or false."],
      ["double price;", "Declared first, given a value inside the branches."],
      ["else { if ... }", "A condition nested inside another."],
      ["$%.2f", "The $ is plain text; %.2f is the price with 2 decimals."],
    ],
    exercise: "Set isTuesday to false and test ages 5, 13, 64 and 65. Then add a rule: students (a second boolean) pay 11 if not Tuesday.",
  },

  /* ===== Module 5 ===== */
  {
    id: "loops-nested",
    module: "5. Loops and Validation",
    title: "while loops and nested loops",
    source: "Loops.java",
    concepts: ["while", "nested loops", "counters", "print", "patterns"],
    intro: "Replace the repeated println lines from earlier with a loop that builds a triangle of stars.",
    code: String.raw`
public class Loops {
    public static void main(){
        int n = 10;
        int c = 1;
      /*   while(c <= n){
            System.out.println(c);
            c++;
        }
            */
       /*  String a = "*";
        while (c <= n) {
            System.out.println(a);
            a += "*";
            c++;
           }
*/

        int l = 1;
        while (c <= n) {
            while (l <= c) {
                System.out.print("*");
                l++;
            } 
            c++;
            l = 1;
            System.out.print("\n");
        }
    }
}`,
    explain: [
      "A while loop repeats its block as long as the condition is true. The first commented-out version prints 1 to 10 by increasing the counter c each time.",
      "The second commented-out version builds the row as a String and adds a star each round. The final version solves it without a String, using a loop inside a loop.",
      "c counts the rows. For each row the inner loop prints c stars, using l as its counter. After the row, l is reset to 1 and \\n starts a new line. The result is a triangle: 1 star, 2 stars, ... 10 stars.",
      "Trace row 3: c is 3, the inner loop runs while l <= 3, printing three stars, then c becomes 4 and l goes back to 1.",
    ],
    breakdown: [
      ["while (c <= n) { ... }", "Repeat while the condition is true."],
      ["c++", "Move the counter on, otherwise the loop never ends."],
      ["l = 1;", "Reset the inner counter before the next row."],
      ["/* ... */", "A multi-line comment."],
    ],
    lookCloser: [
      "Forgetting c++ or l = 1 would make an infinite loop or a wrong pattern.",
    ],
    exercise: "Change the program so the triangle is upside down (10 stars first, 1 star last). Then make n part of the pattern: n = 5.",
  },
  {
    id: "characters-while",
    module: "5. Loops and Validation",
    title: "Looping through a String",
    source: "Characters.java",
    concepts: ["String", "length", "charAt", "while", "index", "off-by-one"],
    intro: "Visit every character in a word using an index, and put a dash after each one.",
    code: String.raw`
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
}`,
    explain: [
      "Characters in a String are numbered from 0: h is 0, e is 1, and so on. word.length() is 12 and word.charAt(i) returns the character at position i.",
      "The loop starts at index 1 and runs while index < 12, so it visits positions 1 to 11.",
      "The if is meant to print the last character without a dash, but there is no else, so the last character is printed twice.",
    ],
    breakdown: [
      ["word.length()", "Number of characters (12 here)."],
      ["word.charAt(index)", "The character at that position (starting at 0)."],
      ["word.length()-1", "The index of the last character."],
      ["word.indexOf(text)", "Mentioned in your comment: position of the first match."],
    ],
    lookCloser: [
      "Output: e-l-l-o- -w-o-r-l-d-!!-  Two bugs: it starts at index 1, so the h is skipped, and the ! is printed twice (once plainly, once with a dash).",
      "The next lesson fixes both with a for loop and an else.",
    ],
    exercise: "Start at index 0 and add else so the output is h-e-l-l-o- -w-o-r-l-d-! with no extra dash at the end.",
  },
  {
    id: "characters-for",
    module: "5. Loops and Validation",
    title: "for loops",
    source: "CharactersForlLoops.java",
    concepts: ["for loop", "String", "charAt", "else", "initialization", "condition", "update"],
    intro: "The same task with a for loop, which keeps the counter, condition and update in one line.",
    code: String.raw`
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
}`,
    explain: [
      "A for loop has three parts: where to start (int index = 0), when to keep going (index < word.length()) and what to do after each round (index++). It is a tidier form of the while loop from the last lesson.",
      "Now the loop starts at 0 and the else makes sure the last character is printed without a dash. Output: h-e-l-l-o- -w-o-r-l-d-!",
    ],
    breakdown: [
      ["for (init; condition; update)", "Parts are separated by semicolons (your comment uses commas, but Java requires ;)."],
      ["int index = 0", "Runs once, before the first round. index only exists inside the loop."],
      ["index < word.length()", "Checked before every round."],
      ["index++", "Runs after every round."],
    ],
    exercise: "Use a for loop to count how many times the letter l appears in the word and print the count.",
  },
  {
    id: "number-table",
    module: "5. Loops and Validation",
    title: "Nested for loops: a number table",
    source: "NumberTable.java",
    concepts: ["nested for loops", "rows and columns", "arithmetic with counters", "println", "print"],
    intro: "Use one for loop inside another to print a 5 × 5 grid of the numbers 1 to 25.",
    code: String.raw`
public class NumberTable {
    public static void main(){
      for( int i = 0; i < 5 ; i++)  {
            System.out.println();
            for (int index = 1; index <= 5 ; index++  ){
                if (index == index -1){
                    System.out.print(index + 5*i + "-");
                }
                else{
                    System.out.print(index + 5*i );
                }
            }
        }
    }
}`,
    explain: [
      "The outer loop (i = 0 to 4) is the row counter. The inner loop (index = 1 to 5) is the column counter and runs completely for every row.",
      "Each cell prints index + 5*i. In row 0 that is 1, 2, 3, 4, 5. In row 1 the 5*i adds 5, giving 6 to 10, and so on up to 25. This is the same nested idea as the star triangle, but with a calculation instead of a star.",
      "System.out.println() with nothing inside just ends the current line, so each row starts on a new line.",
    ],
    breakdown: [
      ["for (int i = 0; i < 5; i++)", "Outer loop: 5 rows (i is 0, 1, 2, 3, 4)."],
      ["for (int index = 1; index <= 5; index++)", "Inner loop: 5 columns (index is 1 to 5), restarted for each row."],
      ["index + 5*i", "The number in that cell: the column plus 5 for each row above."],
      ["System.out.println();", "Empty println: just moves to a new line."],
    ],
    lookCloser: [
      "index == index - 1 can never be true (a number is never one less than itself), so the dash branch never runs. It was probably meant to be a check for a particular column, such as the last one.",
      "There are no spaces between the numbers, so the output reads as 12345, 678910, 1112131415 and so on. Print the number followed by a space or a \\t.",
      "println() is at the start of each row, so the first line of the output is blank. Move it to the end of the inner loop to avoid that.",
    ],
    exercise: "Print the table with a tab between numbers and no blank first line. Then change it to 3 rows and 7 columns, still counting 1, 2, 3 ... without gaps.",
  },
  {
    id: "pin-checker",
    module: "5. Loops and Validation",
    title: "Validation with a loop",
    source: "PinChecker.java",
    concepts: ["validation", "while", "boolean flag", "final", "Scanner", "Integer.parseInt"],
    intro: "Keep asking for a PIN until the user types the right one.",
    code: String.raw`
import java.util.Scanner;
public class PinChecker {
    public static void main(){
        final int PIN = 2288;
        boolean pin = true;

        while (pin == true){
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter a 4-digit name");
            String input = sc.nextLine();
            sc.close();
            int digit = Integer.parseInt(input);
            if (digit == PIN){
                System.out.println("Pin is correct");
                pin = false;
            }
        }
    }
}`,
    explain: [
      "pin acts as a flag: while it is true the loop keeps asking. When the correct PIN is typed, the program prints a message and sets pin = false, which ends the loop.",
      "The PIN is stored as a final constant. The user's input is read as text, converted with Integer.parseInt and compared with ==, which is correct for ints.",
    ],
    breakdown: [
      ["final int PIN = 2288;", "The value to match; it cannot change."],
      ["boolean pin = true;", "A flag that controls the loop."],
      ["while (pin == true)", "Same as while (pin)."],
      ["if (digit == PIN)", "== is right for numbers (but not for Strings)."],
    ],
    lookCloser: [
      "sc.close() inside the loop closes the keyboard input. On a wrong guess the second round fails with an error. Create the Scanner once before the loop and close it after.",
      "The prompt says '4-digit name'; it should say PIN.",
      "The flag is named pin, which looks like PIN. A name such as pinIncorrect or keepAsking is clearer.",
      "Typing letters causes a NumberFormatException.",
    ],
    exercise: "Fix the Scanner problem. Then allow only 3 attempts and print \"Card locked\" if all fail.",
  },

  {
    id: "is-it-valid",
    module: "5. Loops and Validation",
    title: "Repeating with user input",
    source: "IsItValid.java",
    concepts: ["Scanner", "Integer.parseInt", "while", "validation", "closing resources", "IllegalStateException"],
    intro: "Ask for a number and a word, then print the word that many times. The commented-out loop shows where input validation was going to go.",
    code: String.raw`
//import libraries that are needed
import java.util.Scanner;//import library for scanner
public class IsItValid {
    public static void main(){
        Scanner sc = new Scanner(System.in); //Scanner "scanner name" = new Scanner(System.in)
        
        System.out.println("Please enter a number:");
        String input = sc.nextLine();
        //while (){
        //    System.out.println("Number invalid, please try again:");
        //    input = sc.nextLine();
        //}

        System.out.println("please enter a word:");
        String word = sc.nextLine();

        sc.close();
        int n = Integer.parseInt(input);
        sc.nextLine(); //to get rid off the \n after the number
        int c = 1;

        while (c <= n){
            System.out.println(c);
            System.out.println(word);

            c++;
        }
    }
}`,
    explain: [
      "The number is read as text first (nextLine) and converted later with Integer.parseInt. Reading as text lets the program check the input before converting it, which nextInt() can't do: it fails immediately on bad input.",
      "The commented-out while loop shows the plan: while the input is not a valid number, print \"Number invalid, please try again:\" and read again. The condition was never filled in.",
      "The final loop prints the counter and then the word, n times. With 3 and hi you would get 1, hi, 2, hi, 3, hi, each on its own line.",
    ],
    breakdown: [
      ["sc.nextLine()", "Reads a whole line as text."],
      ["Integer.parseInt(input)", "Converts text into an int. Fails if the text is not a whole number."],
      ["while (c <= n)", "Repeat n times, counting c from 1."],
      ["sc.close()", "Closes the scanner. It can't be used afterwards."],
    ],
    lookCloser: [
      "sc.close() runs before sc.nextLine(), so the last sc.nextLine() throws an IllegalStateException (Scanner closed) and the loop never runs. Close the scanner only after all reading is done.",
      "That extra sc.nextLine() is not needed anyway. Its comment is about the leftover Enter after nextInt(), but this program only uses nextLine(), which already consumes the Enter.",
      "Despite its name, the program does not validate anything yet. If the user types abc, parseInt throws a NumberFormatException.",
    ],
    exercise: "Remove the bug, then fill in the validation loop: keep asking until the text contains only digits. Hint: use a for loop with charAt and Character.isDigit(...) on each character.",
  },

  /* ===== Module 6 ===== */
  {
    id: "sum-multiples",
    module: "6. Working with Numbers",
    title: "Accumulating a sum",
    source: "SumOfMultiplesOf3Or5.java",
    concepts: ["accumulator", "while", "%", "||", "Scanner"],
    intro: "Add up every number from n down to 2 that is a multiple of 3 or 5.",
    code: String.raw`
import java.util.Scanner;

public class SumOfMultiplesOf3Or5 {
        public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter a value: ");
        int n = Integer.parseInt(sc.nextLine());

        int sum = 0;

        while (n > 1) {
            if (n % 3 == 0 || n % 5 == 0){
                sum = sum + n;
            }
            n = n-1;
        }
        System.out.print(sum);
        sc.close();

        }
}`,
    explain: [
      "sum starts at 0 and collects values: an accumulator. The loop counts n down by 1 each round.",
      "n % 3 == 0 is true when n divides evenly by 3. || means 'or', so numbers divisible by 3 or by 5 are added.",
      "Example: n = 10 adds 10, 9, 6, 5 and 3 for a total of 33. Note that n itself is included.",
    ],
    breakdown: [
      ["int sum = 0;", "Starting value of the running total."],
      ["n % 3 == 0", "True when the remainder is 0."],
      ["sum = sum + n;", "Add n to the running total."],
      ["n = n-1;", "Count down. Same as n--."],
    ],
    lookCloser: [
      "The loop changes n, so the original number is lost. Copy it first if you need it later (the Palindrome lesson does this).",
    ],
    exercise: "Change it so only numbers below n are added (n = 10 gives 23). Then try a for loop counting up from 1.",
  },
  {
    id: "reverse-digits",
    module: "6. Working with Numbers",
    title: "Reversing the digits of a number",
    source: "ReverseDigits.java",
    concepts: ["% 10", "/ 10", "digits", "while", "step-by-step to general solution"],
    intro: "First reverse a two-digit number with fixed steps, then see how a loop handles a number of any length.",
    code: String.raw`
public class ReverseDigits {
    public static void main(){
        int original = 12;
        int d1 = original;
        int d2 = 0;
     
        int result = 0;

        d1 = d1 % 10;
        d2 = original / 10;
        result = d1 * 10 + d2;

        System.out.printf("result: %d ", result);

        int original3 = 123;
        //int d13 = original;
        //int d23 = 0;
        //int d33 = 0;

     
        int result3 = 0;

        //d13 = d13 % 10;
        //d23 = original3 / 10;
        //d33 = original3 / 100;
        //result3 = d13 * 100 + d23 * 10 + d33;

        while(original3 != 0){
            result3 = (result3 * 10) + (original3 % 10);
            original3 = original3 / 10;

        }

        System.out.printf("result: %d ", result3);

    }
}`,
    explain: [
      "Part 1 (12): 12 % 10 is the last digit, 2. 12 / 10 is 1, the first digit. result = 2 * 10 + 1 = 21. This works only for exactly two digits.",
      "The commented-out attempt for 123 shows why fixed steps don't scale: original3 / 10 is 12 (not a single digit), so the formula would give the wrong answer. Every extra digit needs new, different steps.",
      "The loop is the general solution. Each round it takes the last digit (original3 % 10), appends it to result3 (result3 * 10 + digit) and removes it from the number (original3 / 10). Trace 123: result 3 → 32 → 321, while the number goes 123 → 12 → 1 → 0.",
      "Output: result: 21 result: 321",
    ],
    breakdown: [
      ["n % 10", "Last digit of n."],
      ["n / 10", "n without its last digit."],
      ["result * 10 + digit", "Shift the result one place left and add the new digit at the end."],
      ["while (n != 0)", "Stop when no digits are left."],
    ],
    lookCloser: [
      "Trailing zeros are lost: 120 reverses to 21, because as a number 021 is just 21.",
      "The loop tests != 0 rather than > 0, so negative numbers reverse too (-123 gives -321). The Palindrome lesson uses > 0, so it behaves differently for negatives.",
      "The loop uses up original3, so its original value is gone afterwards. Palindrome keeps a copy for the comparison.",
    ],
    exercise: "Read the number from the user, print the reversed number followed by a new line, and count how many digits it has using the same loop.",
  },
  {
    id: "palindrome",
    module: "6. Working with Numbers",
    title: "Reversing digits: palindromes",
    source: "Palindrome.java",
    concepts: ["digits", "% 10", "/ 10", "reverse", "while", "boolean logic"],
    intro: "Check whether a whole number reads the same forwards and backwards by building its reverse.",
    code: String.raw`
import java.util.Scanner;

public class Palindrome {
     public static void main() {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter a value: ");
        int a = Integer.parseInt(sc.nextLine());

        int n = a;
        int b = 0;
        int c = 0;

        while (n > 0) {
            b = n % 10;
            c = c * 10 + b;
            n = n/10;
        }
        sc.close();

        if (c==a){
            System.out.println("palindrome");
        }
        else{
            System.out.println("not palindrome");
        }

        sc.close();
    }
}`,
    explain: [
      "n % 10 gives the last digit of n. n / 10 removes the last digit (integer division). c * 10 + b appends that digit to the reversed number c.",
      "Trace 121: b=1, c=1, n=12 → b=2, c=12, n=1 → b=1, c=121, n=0. The loop ends and c (121) equals a (121), so it prints palindrome. For 123 the reverse is 321, so not palindrome.",
      "a keeps the original, n is the working copy that gets shrunk.",
    ],
    breakdown: [
      ["n % 10", "Last digit."],
      ["n / 10", "Number without its last digit."],
      ["c * 10 + b", "Shift c one place left and add the new digit."],
      ["c == a", "Compare the reverse with the original."],
    ],
    lookCloser: [
      "sc.close() is called twice. It does no harm, but once is enough.",
      "Negative numbers skip the loop, so c stays 0 and they are always reported as not palindrome. Very large numbers can overflow int.",
    ],
    exercise: "Write the program that prints only the reversed number. Then count how many digits the number has using the same loop.",
  },

  /* ===== Module 7 ===== */
  {
    id: "binary-to-decimal",
    module: "7. Number Systems",
    title: "Binary to decimal",
    source: "BinaryToDecimal.java",
    concepts: ["number bases", "binary", "place value", "% 10", "/ 10", "final", "while"],
    intro: "Convert a binary number into the decimal numbers we use every day, one digit at a time.",
    code: String.raw`
public class BinaryToDecimal {
    public static void main (){
    int number = 1000110111;
    int original = number;
    int decimalNumber = 0;
    int digitValue = 1;
    final int BASE = 2;


    while (number != 0){
    int lastDigit = number % 10;
    decimalNumber = decimalNumber + lastDigit * digitValue;
    number = number/10;
    digitValue = digitValue * BASE;
    }

    System.out.printf("Number %d (Base %d) is %d  in decimal(Base 10)", original,  BASE, decimalNumber);

    }

}`,
    explain: [
      "In decimal, each place is worth 10 times the one to its right (1, 10, 100, ...). In binary, each place is worth 2 times the one to its right (1, 2, 4, 8, ...). digitValue holds the value of the current place and is multiplied by BASE every round.",
      "The loop takes the last digit with % 10, multiplies it by its place value, adds that to the total and removes the digit with / 10. This is the same digit-by-digit technique as in the reverse and palindrome lessons.",
      "For 1000110111 the 1s are at the places worth 1, 2, 4, 16, 32 and 512, so the total is 567. The output is: Number 1000110111 (Base 2) is 567  in decimal(Base 10)",
      "Changing BASE changes the number system, so the same loop converts from other bases (see the last lesson in this module).",
    ],
    breakdown: [
      ["final int BASE = 2;", "The number system being converted from. Constant, so it has a name instead of a magic 2."],
      ["lastDigit * digitValue", "A digit's contribution: digit × value of its place."],
      ["digitValue * BASE", "Move to the next place: 1, 2, 4, 8, ..."],
      ["%d  %d  %d", "Three placeholders filled by original, BASE and decimalNumber, in order."],
    ],
    lookCloser: [
      "The binary number is stored in an int as if it were a decimal number, so it is limited to about 10 digits (the int maximum is 2,147,483,647).",
      "Nothing checks that the digits are only 0 and 1. A value like 1200 would give an answer, but not a meaningful one.",
    ],
    exercise: "Convert 101 and 11111111 by hand using place values, then check your answers with the program. Set BASE to 8 and the number to 755: you should get 493.",
  },
  {
    id: "decimal-to-base",
    module: "7. Number Systems",
    title: "Decimal to another base",
    source: "DecimalToBinary.java",
    concepts: ["number bases", "repeated division", "remainder", "place value", "while"],
    intro: "The reverse conversion: divide by the base again and again, and collect the remainders.",
    code: String.raw`
public class DecimalToBinary {
    public static void main (){
        int number = 34;
        int base = 3;
        int finals = 0;
        int rest = 0;
        int position = 1;

        while (number != 0 ){
            rest = number % base;
            finals = position * rest  + finals;
            number = number / base;
            position = position * 10;
        }

        System.out.printf(" the result of base %d is %d", base, finals);

    }
}`,
    explain: [
      "To write a number in another base, divide by the base: the remainder is the last digit, and the quotient is what is left to convert. Repeat until the quotient is 0.",
      "For 34 and base 3: 34 / 3 = 11 remainder 1; 11 / 3 = 3 remainder 2; 3 / 3 = 1 remainder 0; 1 / 3 = 0 remainder 1. The digits, from last to first, are 1, 2, 0, 1.",
      "position (1, 10, 100, ...) puts each new remainder in the next decimal place of finals, so finals builds up as 1, 21, 021, 1021. The output is:  the result of base 3 is 1021",
      "Change base to 2 and the same code converts 34 to binary: 100010.",
    ],
    breakdown: [
      ["number % base", "The next digit in the new base."],
      ["number / base", "What remains to convert."],
      ["position * rest + finals", "Put the digit in its place and add it to the result so far."],
      ["position * 10", "Move to the next decimal place."],
    ],
    lookCloser: [
      "The file is called DecimalToBinary, but base is set to 3. Set it to 2 for actual binary.",
      "The result is built as a decimal-looking number in an int, so large results overflow. In binary this starts happening at about 1024.",
      "The variable is called finals because final is a reserved word in Java and can't be used as a name.",
    ],
    exercise: "Set base to 2 and check 34 → 100010 by adding up the place values. Then convert 255 to base 8 and read number and base from the user with Scanner.",
  },
  {
    id: "base-converter",
    module: "7. Number Systems",
    title: "Base converter: putting it together",
    source: "BaseConverterCalc.java",
    concepts: ["validation", "number bases", "long", "return", "else if", "combining techniques"],
    intro: "Combine the last two lessons into one program that converts a number from any base to any other base (2 to 9), with input checks.",
    code: String.raw`
import java.util.Scanner;//import library for scanner
public class BaseConverterCalc {
    public static void main (){
        Scanner sc = new Scanner(System.in); 
        //System.out.println("Please enter value of number to convert");
        int V = sc.nextInt();
        //System.out.println("Please enter original base");
        int B = sc.nextInt();
        //System.out.println("Please enter desired base for converting");
        int C = sc.nextInt();
        sc.close();

        if (V == 0){
            System.out.println("0");
        }
        //if checks if both bases are between 2 and 9
        else if (B < 2 || B > 9 || C < 2 || C > 9){
            System.out.println("Invalid base");
        }

        else{
            long vAsDecimal = 0; //renamed from deciamlN to be more understandable
            long digit = 1; //renamed from digitV to simplify
            long lastDigit = 0; //renamed from lastD to explain what d stands for

            while (V != 0){
                lastDigit = V % 10;

                if (lastDigit >= B){
                    System.out.printf("Invalid digit for base %d" , B);
                    return; // leave and end 
                }

                vAsDecimal =  vAsDecimal + lastDigit * digit;
                V = V /10;
                digit = digit * B;
            }

            long finalN = 0; //renamed from finals as I got an error
            long rest = 0;
            long position = 1;
            long number = vAsDecimal;

            while (number != 0){
                rest = number % C;
                finalN = position * rest + finalN;
                number = number / C;
                position = position * 10;
            }

            System.out.printf("%d" , finalN);
        }
    }
}`,
    explain: [
      "The program reads three numbers: the value V, its base B and the target base C. Converting between two bases goes through decimal: first original base → decimal, then decimal → target base.",
      "Step 1, checks: a value of 0 prints 0, and bases outside 2–9 print Invalid base. Bases above 9 need letters as digits, which can't be stored in a number.",
      "Step 2 is the Binary to decimal loop, with BASE replaced by B. It also checks every digit: in base 3, a digit of 3 or more is impossible, so the program prints Invalid digit and return ends main immediately.",
      "Step 3 is the Decimal to another base loop, with base replaced by C.",
      "Example: 1010 from base 2 to base 8. Step 2 gives 10. Step 3: 10 / 8 = 1 remainder 2, then 1 / 8 = 0 remainder 1, so the result is 12. Another: 21 from base 3 to base 2 gives 7 in decimal, and then 111.",
      "long variables hold bigger numbers than int, so more digits fit before overflowing.",
    ],
    breakdown: [
      ["if / else if / else", "Three outcomes: zero, invalid base, or convert."],
      ["B < 2 || B > 9 || C < 2 || C > 9", "True if either base is out of range."],
      ["lastDigit >= B", "A digit must be smaller than its base."],
      ["return;", "Ends the method (and here the program) immediately."],
      ["long", "Like int, but holds much larger whole numbers."],
    ],
    lookCloser: [
      "The prompts are commented out, so the program waits silently. Enter the value, the original base and the target base, separated by spaces or new lines.",
      "V is still an int, so the input is limited to about 10 digits, even though the calculations use long.",
      "Base 10 is rejected (B > 9), although it would technically work with this method.",
      "V, B and C are capitalised like constants, but they are ordinary variables. Names such as value, fromBase and toBase would be clearer.",
    ],
    exercise: "Turn the prompts back on. Then, once you know methods, split the two loops into toDecimal(value, base) and fromDecimal(number, base) methods and call them from main.",
  },

  /* ===== Module 8 ===== */
  {
    id: "second-largest-input",
    module: "8. Problem Solving",
    title: "Second largest value from input",
    source: "SecondLargestDistinctValueClass.java",
    concepts: ["tracking max values", "while", "Scanner", "nextInt", "if / else if", "edge cases"],
    intro: "Read n numbers and find the second largest by tracking the two biggest values seen so far.",
    code: String.raw`
import java.util.Scanner;

public class SecondLargestDistinctValueClass {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //prints a question and accepts an integer input from the user
        System.out.print("Enter amount of numbers: ");
        int n = sc.nextInt();
        System.out.println("Enter the first value: ");
        int a = sc.nextInt();

        System.out.println("Enter the second value: ");
        int b = sc.nextInt();

        int counter = 2;
        int max1 = 0;
        int max2 = 0;

        if (a >= b) {
            max1 = a;
            max2 = b;
        }
        else {
            max1 = b;
            max2 = a;
        }

        while (counter <= n) {
            System.out.print("Enter the next value: ");
            int c = sc.nextInt();

            if (c > max1) {
                max2 = max1;
                max1 = c;
            }
            else if (c > max2) {
                max2 = c;
            }

            counter++;
        }

        if (max1 == max2){
            System.out.println("No second largest value");
        }
        else{
            System.out.println(max2);
        }

        sc.close();
    }
}`,
    explain: [
      "The idea: instead of storing every number, only remember the largest (max1) and second largest (max2). The first two inputs set the starting values.",
      "For each new number c: if it beats max1, the old max1 becomes max2 and c becomes the new max1. Otherwise, if it beats max2, it replaces max2.",
      "At the end, if max1 and max2 are equal there is no distinct second largest, so the program says so.",
      "This lesson also uses main(String[] args), the traditional form of main, unlike the other files.",
    ],
    breakdown: [
      ["int max1, max2", "The two best values so far."],
      ["counter <= n", "Loop until n values have been read (counter starts at 2 because two are already read)."],
      ["if (c > max1) ... else if (c > max2)", "Update the leaderboard in the right order."],
      ["sc.nextInt()", "Reads a whole number."],
    ],
    lookCloser: [
      "Test 5, 3, 5. After 5 and 3, max1=5 and max2=3. The third value 5 is not > max1, but it is > max2, so max2 becomes 5. The program then reports 'No second largest value', but the answer should be 3.",
      "Test 5, 5, 3. The first two values start max1 and max2 both at 5, and 3 is not bigger than 5, so again it reports no second largest, but the answer should be 3.",
      "A fix: change the second test to else if (c > max2 && c < max1). For the 5, 5, 3 case you also need to handle the start, when a equals b.",
    ],
    exercise: "Fix both test cases above. Then handle n < 2 so the program does not ask for two values that are not needed.",
  },
  {
    id: "second-largest-method",
    module: "8. Problem Solving",
    title: "The same idea as a method",
    source: "SecondLargestDistinctValue.java",
    concepts: ["method", "parameters", "return", "arrays", "javadoc", "null check"],
    intro: "Move the logic into a reusable method that takes an array and returns the answer instead of printing it.",
    code: String.raw`
public class SecondLargestDistinctValue {
/** 
    @param values The array of integers to search from
    @return Returns the second largest distinct values or if second value doesn't exist it will return -1
*/
    public static int whatLargestDistinctValue (int[] values) {
        if (values == null || values.length < 2){
            return -1;
        }

        int counter = 2;
        int max1 = 0;
        int max2 = 0;
        int a = values[0];
        int b = values[1];

        if (a >= b) {
            max1 = a;
            max2 = b;
        }
        else {
            max1 = b;
            max2 = a;
        }

        while (counter < values.length) {
            int c = values[counter];

            if (c > max1) {
                max2 = max1;
                max1 = c;
            }
            else if (c > max2) {
                max2 = c;
            }

            counter++;
        }

        if (max1 == max2){
            return -1;
        }
        else{
            return max2;
        }
    }
}`,
    explain: [
      "This class has no main. It holds a method that other code can call: SecondLargestDistinctValue.whatLargestDistinctValue(new int[]{4, 9, 2}) returns 4.",
      "int[] values is an array: a numbered list of ints. values.length is its size and values[0] is the first item.",
      "Instead of printing, the method uses return to send an answer back. -1 is the signal for 'no answer'. The first check guards against a null array or one with fewer than 2 items.",
      "The comment above the method is Javadoc. It documents parameters (@param) and the result (@return).",
    ],
    breakdown: [
      ["public static int name(int[] values)", "Access, belongs to the class, returns an int, takes an int array."],
      ["values.length", "Number of items in the array."],
      ["values[counter]", "The item at that position (starting at 0)."],
      ["return -1;", "Ends the method immediately and gives back -1."],
      ["/** ... */", "Javadoc comment: documentation tools read it."],
    ],
    lookCloser: [
      "The logic is the same as the previous lesson, so it has the same edge-case problems (for example {5, 3, 5} returns -1 instead of 3).",
      "Returning -1 as 'no answer' fails if -1 is a valid value in the array. Think about other ways to signal 'nothing found'.",
    ],
    exercise: "Write a main method that calls whatLargestDistinctValue with at least five different arrays (including null, one item and duplicates) and prints each result. Then fix the bug.",
  },
];
