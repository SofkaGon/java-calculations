import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;


public class Main extends Application {
    @Override // Override the start method of the Application class, ensures that the method is correctly overridden from the javafx.application.Application class
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Specific Calculator");//title
        
        Label titLabel = new Label("Specific Calculator");
        titLabel.setStyle("-fx-font-size: 20px, -fx-font-weight: bold;");//UI lable style

        //Drop down menu for all diffrent calcualtions
        ComboBox<String> operationComboBox = new ComboBox<>();
        operationComboBox.getItems().addAll(
            "Second Largest Distinct Value",
            "Longest Increasing Run",
            "Largest Sum Of Two Consecutive Numbers",
            "Longest Run Of Negative Numbers",
            "Closest to Zero",
            "Position Of The Largest Value",
            "Multiplication Table",
            "Factorial Calculator",
            "Palindrome Number Check",
            "Reverse Number",
            "Digit Sum Until Single Digit"
        );
        operationComboBox.setPromptText("Select Mathematical Operation");

        //input
        TextField inputField = new TextField();
        TextField arrayInpuField = new TextField();

        //button to start operations
        Button runButton = new Button("Run");
        Label resultLabel = new Label("Result:");
        TextArea resultArea = new TextArea();
        resultArea.setEditable(false);
        resultArea.setWrapText(true);

        //layout
        GridPane grid = new GridPane();
        grid.setVgap(10);
        grid.setHgap(10);
        grid.add(titLabel, 0, 0 , 2,1);
        grid.add(new Label("Operation:"), 0, 1);
        grid.add(operationComboBox, 1,1);
        grid.add(new Label("Enter Number:"), 0, 2);
        grid.add(inputField, 1, 2);
        grid.add(new Label("Enter numbers saperated by comma:"), 0, 3);
        grid.add(arrayInpuField, 1, 3);
        grid.add(runButton, 1,4);
        grid.add(resultLabel, 0,5);
        grid.add(resultArea, 1,5);

        //seting the scene
        Scene scene = new Scene(grid, 500, 400);
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    public static  void main(String[] args){
        launch(args);

    }
}
