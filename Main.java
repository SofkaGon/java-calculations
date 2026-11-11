import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.geometry.Insets;
import javafx.stage.Stage;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) {

        primaryStage.setTitle("Specific Calculator");

        // Title
        Label titleLabel = new Label("Specific Calculator");
        titleLabel.setStyle("-fx-font-size: 20px; -fx-font-weight: bold;");

        // Calculator selection
        ComboBox<String> operationComboBox = new ComboBox<>();

        operationComboBox.getItems().addAll(
            "Factorial Calculator",
            "Base Converter",
            "Closest To Zero",
            "Digit Sum",
            "Reverse Number",
            "Prime Check",
            "Multiplication Table",
            "GCD",
            "Prime Factors",
            "Largest Sum of Two Consecutive Numbers",
            "Position Largest Value",
            "Second Largest Distinct Value",
            "Longest Increasing Run",
            "Longest Run Of Negative Numbers",
            "Best Trade",
            "Loan Schedule",
            "Date Difference",
            "Bank Account",
            "Coordinates",
            "ETA",
            "Division Remainder",
            "Maximum Input"  
        );

        operationComboBox.setPromptText("Select Calculator");

        // Input fields
        Label[] inputLabels = new Label[6];
        TextField[] inputFields = new TextField[6];

        GridPane inputGrid = new GridPane();

        inputGrid.setVgap(10);
        inputGrid.setHgap(10);

        for (int i = 0; i < 6; i++) {

            inputLabels[i] = new Label();
            inputFields[i] = new TextField();

            inputGrid.add(inputLabels[i], 0, i);
            inputGrid.add(inputFields[i], 1, i);

            // Initially hide all input fields
            inputLabels[i].setVisible(false);
            inputLabels[i].setManaged(false);

            inputFields[i].setVisible(false);
            inputFields[i].setManaged(false);
        }

        // Result area
        Label resultLabel = new Label("Result:");

        TextArea resultArea = new TextArea();

        resultArea.setEditable(false);
        resultArea.setWrapText(true);
        resultArea.setPrefRowCount(5);

        // Run button
        Button runButton = new Button("Calculate");

        // Change input fields depending on selected calculator
        operationComboBox.valueProperty().addListener(
            (observable, oldValue, newValue) -> {

                // Hide all fields first
                for (int i = 0; i < 6; i++) {

                    inputLabels[i].setVisible(false);
                    inputLabels[i].setManaged(false);

                    inputFields[i].setVisible(false);
                    inputFields[i].setManaged(false);

                    inputFields[i].clear();
                }

                resultArea.clear();

                if (newValue == null) {
                    return;
                }

                int numberOfInputs = 0;

                switch (newValue) {

                    case "Factorial Calculator":

                        inputLabels[0].setText("Enter number:");
                        numberOfInputs = 1;

                        break;

                    case "Base Converter":

                        inputLabels[0].setText("Enter number:");
                        inputLabels[1].setText("Original base:");
                        inputLabels[2].setText("Target base:");

                        numberOfInputs = 3;

                        break;

                    case "Closest To Zero":

                        inputLabels[0].setText(
                            "Enter numbers separated by commas:"
                        );

                        numberOfInputs = 1;

                        break;

                    case "Digit Sum":

                        inputLabels[0].setText("Enter number:");
                        numberOfInputs = 1;

                        break;

                    case "Reverse Number":

                        inputLabels[0].setText("Enter number:");
                        numberOfInputs = 1;

                        break;

                    case "Prime Check":

                        inputLabels[0].setText("Enter number:");
                        numberOfInputs = 1;

                        break;

                    case "Multiplication Table":

                        inputLabels[0].setText("Enter number:");
                        numberOfInputs = 1;

                        break;

                    case "GCD":

                        inputLabels[0].setText("First number:");
                        inputLabels[1].setText("Second number:");

                        numberOfInputs = 2;

                        break;

                    case "Prime Factors":

                        inputLabels[0].setText("Enter number:");

                        numberOfInputs = 1;

                        break;
                        
                    case "Largest Sum of Two Consecutive Numbers":

                        inputLabels[0].setText(
                        "Enter numbers separated by commas:"
                        );

                        numberOfInputs = 1;

                        break;

                    case "Position Largest Value":

                        inputLabels[0].setText(
                        "Enter numbers separated by commas:"
                        );

                        numberOfInputs = 1;

                        break;


                    case "Second Largest Distinct Value":

                        inputLabels[0].setText(
                        "Enter numbers separated by commas:"
                        );

                        numberOfInputs = 1;

                        break;


                    case "Longest Increasing Run":

                        inputLabels[0].setText(
                        "Enter numbers separated by commas:"
                        );

                        numberOfInputs = 1;

                        break;


                    case "Longest Run Of Negative Numbers":

                        inputLabels[0].setText(
                        "Enter numbers separated by commas:"
                        );

                        numberOfInputs = 1;

                        break;

                    case "Best Trade":

                        inputLabels[0].setText(
                        "Enter stock prices separated by commas:"
                        );

                        numberOfInputs = 1;

                        break;

                    case "Loan Schedule":

                        inputLabels[0].setText("Principal:");
                        inputLabels[1].setText("Annual interest rate (%):");
                        inputLabels[2].setText("Monthly payment:");

                        numberOfInputs = 3;

                        break;

                    case "Date Difference":

                        inputLabels[0].setText("First day:");
                        inputLabels[1].setText("First month:");
                        inputLabels[2].setText("First year:");
                        inputLabels[3].setText("Second day:");
                        inputLabels[4].setText("Second month:");
                        inputLabels[5].setText("Second year:");

                        numberOfInputs = 6;

                        break;

                    case "Bank Account":

                        inputLabels[0].setText("Initial balance:");
                        inputLabels[1].setText("Transactions (e.g. D 200, W 50):");

                        numberOfInputs = 2;

                        break;

                    case "Coordinates":

                        inputLabels[0].setText("X1:");
                        inputLabels[1].setText("Y1:");
                        inputLabels[2].setText("X2:");
                        inputLabels[3].setText("Y2:");

                        numberOfInputs = 4;

                        break;

                    case "ETA":

                        inputLabels[0].setText("Velocity:");
                        inputLabels[1].setText("Distance:");

                        numberOfInputs = 2;

                        break;

                    case "Division Remainder":

                        inputLabels[0].setText("First number:");
                        inputLabels[1].setText("Second number:");

                        numberOfInputs = 2;

                        break;

                    case "Maximum Input":

                        inputLabels[0].setText(
                            "Enter numbers separated by commas:"
                        );

                        numberOfInputs = 1;

                        break;
                        
                }

                // Show required input fields
                for (int i = 0; i < numberOfInputs; i++) {

                    inputLabels[i].setVisible(true);
                    inputLabels[i].setManaged(true);

                    inputFields[i].setVisible(true);
                    inputFields[i].setManaged(true);
                }

            }
        );

        // Execute selected calculator
        runButton.setOnAction(e -> {

            String selectedOperation = operationComboBox.getValue();

            String result = "";

            if (selectedOperation == null) {

                resultArea.setText("Please select a calculator.");
                return;
            }

            try {

                switch (selectedOperation) {

                    case "Factorial Calculator":

                        int n = Integer.parseInt(
                            inputFields[0].getText().trim()
                        );

                        result = Factorial.calculate(n);

                        break;

                    case "Base Converter":

                        long V = Long.parseLong(
                            inputFields[0].getText().trim()
                        );

                        int B = Integer.parseInt(
                            inputFields[1].getText().trim()
                        );

                        int C = Integer.parseInt(
                            inputFields[2].getText().trim()
                        );

                        result = BaseToBase.calculate(V, B, C);

                        break;

                    case "Closest To Zero":

                        String[] values = inputFields[0]
                            .getText().trim().split("\\s*,\\s*");

                        if (values.length < 2) {

                            resultArea.setText(
                                "Please enter at least 2 numbers."
                            );

                            return;
                        }

                        int[] numbers = new int[values.length];

                        for (int i = 0; i < values.length; i++) {

                            numbers[i] = Integer.parseInt(values[i]);

                        }

                        int closest = ClosestToZero.calculate(numbers);

                        result = "Closest to zero: " + closest;

                        break;
                    case "Digit Sum":
                        result = DigitSum.calculate(
                        Integer.parseInt(inputFields[0].getText())
                        );
                        break;

                    case "Reverse Number":
                        result = ReverseNumber.calculate(
                        Integer.parseInt(inputFields[0].getText())
                        );
                        break;

                    case "Prime Check":
                        result = PrimeCheck.calculate(
                        inputFields[0].getText()
                        );
                        break;

                    case "Multiplication Table":
                        result = MultiplicationTable.calculate(
                        Integer.parseInt(inputFields[0].getText())
                        );
                        break;

                    case "GCD":

                        int a = Integer.parseInt(
                        inputFields[0].getText().trim()
                        );

                        int b = Integer.parseInt(
                        inputFields[1].getText().trim()
                        );

                        result = GCD.calculate(a, b);

                        break;

                    case "Prime Factors":

                        int number = Integer.parseInt(
                        inputFields[0].getText().trim()
                        );

                        result = PrimeFactorsCalc.calculate(number);

                        break;
                
                    case "Largest Sum of Two Consecutive Numbers": 

                        String[] Largestvalues = inputFields[0]
                        .getText().trim().split("\\s*,\\s*");

                        if (Largestvalues.length < 2) {
                        resultArea.setText("Please enter at least 2 numbers.");
                        return;
                        }

                        int[] Largestnumbers = new int[Largestvalues.length];

                        for (int i = 0; i < Largestvalues.length; i++) {
                            Largestnumbers[i] = Integer.parseInt(Largestvalues[i]);
                        }

                        result = LargestSumOfTwoConsecutiveNumbers.calculate(Largestnumbers);

                        break;
                    
                    case "Position Largest Value": 

                        String[] positionValues = inputFields[0]
                        .getText().trim().split("\\s*,\\s*");

                        if (inputFields[0].getText().trim().isEmpty()) {
                            resultArea.setText("Please enter at least 1 number.");
                        return;
                        }

                        int[] positionNumbers = new int[positionValues.length];

                        for (int i = 0; i < positionValues.length; i++) {
                            positionNumbers[i] = Integer.parseInt(positionValues[i]);
                        }

                        result = PositionLargestValue.calculate(positionNumbers);

                        break;

                    case "Second Largest Distinct Value": 

                        String[] secondValues = inputFields[0]
                        .getText().trim().split("\\s*,\\s*");

                        if (inputFields[0].getText().trim().isEmpty()) {
                            resultArea.setText("Please enter numbers.");
                            return;
                        }

                        int[] secondNumbers = new int[secondValues.length];

                        for (int i = 0; i < secondValues.length; i++) {
                            secondNumbers[i] = Integer.parseInt(secondValues[i]);
                        }

                        result = SecondLargestDistinctValue.calculate(secondNumbers);

                        break;

                    case "Longest Increasing Run": 

                        String[] increasingValues = inputFields[0]
                        .getText().trim().split("\\s*,\\s*");

                        if (inputFields[0].getText().trim().isEmpty()) {
                            resultArea.setText("Please enter at least 1 number.");
                            return;
                        }

                        int[] increasingNumbers = new int[increasingValues.length];

                        for (int i = 0; i < increasingValues.length; i++) {
                            increasingNumbers[i] = Integer.parseInt(increasingValues[i]);
                        }

                        result = LongestIncreasingRun.calculate(increasingNumbers);

                        break;

                    case "Longest Run Of Negative Numbers": 

                        String[] negativeValues = inputFields[0]
                        .getText().trim().split("\\s*,\\s*");

                        if (inputFields[0].getText().trim().isEmpty()) {
                            resultArea.setText("Please enter at least 1 number.");
                            return;
                        }

                        int[] negativeNumbers = new int[negativeValues.length];

                        for (int i = 0; i < negativeValues.length; i++) {
                            negativeNumbers[i] = Integer.parseInt(negativeValues[i]);
                        }

                        result = LongestRunOfNegativeNumbers.calculate(negativeNumbers);

                        break;

                    case "Best Trade":

                        String[] tradeValues = inputFields[0]
                            .getText().trim().split("\\s*,\\s*");

                        if (inputFields[0].getText().trim().isEmpty()) {
                            resultArea.setText("Please enter stock prices.");
                            return;
                        }

                        if (tradeValues.length < 2) {
                            resultArea.setText("Please enter at least 2 prices.");
                            return;
                        }

                        double[] tradeNumbers = new double[tradeValues.length];

                        for (int i = 0; i < tradeValues.length; i++) {
                            tradeNumbers[i] = Double.parseDouble(tradeValues[i]);
                        }

                        result = BestTrade.calculate(tradeNumbers);

                        break;

                    case "Loan Schedule":

                        double principal = Double.parseDouble(
                            inputFields[0].getText().trim()
                        );

                        double interestRate = Double.parseDouble(
                            inputFields[1].getText().trim()
                        );

                        double monthlyPayment = Double.parseDouble(
                            inputFields[2].getText().trim()
                        );

                        result = LoanSchedule.calculate(
                            principal, interestRate, monthlyPayment
                        );

                        break;


                    case "Date Difference":

                        int firstDay = Integer.parseInt(
                            inputFields[0].getText().trim()
                        );

                        int firstMonth = Integer.parseInt(
                            inputFields[1].getText().trim()
                        );

                        int firstYear = Integer.parseInt(
                            inputFields[2].getText().trim()
                        );

                        int secondDay = Integer.parseInt(
                            inputFields[3].getText().trim()
                        );

                        int secondMonth = Integer.parseInt(
                        inputFields[4].getText().trim()
                        );

                        int secondYear = Integer.parseInt(
                            inputFields[5].getText().trim()
                        );

                        result = DateDifference.calculate(
                            firstDay, firstMonth, firstYear,
                            secondDay, secondMonth, secondYear
                        );

                    break;


                    case "Bank Account":

                        double initialBalance = Double.parseDouble(
                            inputFields[0].getText().trim()
                        );

                        String transactionText = inputFields[1].getText().trim();

                        if (transactionText.isEmpty()) {
                            resultArea.setText("Please enter transactions.");
                            return;
                        }

                        String[] transactions = transactionText.split("\\s*,\\s*");

                        int transactionCount = transactions.length;

                        String[] transactionTypes = new String[transactionCount];
                        double[] transactionAmounts = new double[transactionCount];

                        for (int i = 0; i < transactionCount; i++) {

                            String[] transactionParts = transactions[i]
                                .trim().split("\\s+");

                            if (transactionParts.length != 2) {
                                resultArea.setText(
                                    "Invalid transaction format. Use D 200 or W 50."
                                );
                                return;
        }

        transactionTypes[i] = transactionParts[0];

        transactionAmounts[i] = Double.parseDouble(
            transactionParts[1]
        );
    }

    result = BankAccountCalc.calculate(
        initialBalance,
        transactionCount,
        transactionTypes,
        transactionAmounts
    );

    break;


case "Coordinates":

    int x1 = Integer.parseInt(
        inputFields[0].getText().trim()
    );

    int y1 = Integer.parseInt(
        inputFields[1].getText().trim()
    );

    int x2 = Integer.parseInt(
        inputFields[2].getText().trim()
    );

    int y2 = Integer.parseInt(
        inputFields[3].getText().trim()
    );

    result = Coordinates.calculate(x1, x2, y1, y2);

    break;


case "ETA":

    int velocity = Integer.parseInt(
        inputFields[0].getText().trim()
    );

    int distance = Integer.parseInt(
        inputFields[1].getText().trim()
    );

    result = ETA.calculate(velocity, distance);

    break;


case "Division Remainder":

    int divisionA = Integer.parseInt(
        inputFields[0].getText().trim()
    );

    int divisionB = Integer.parseInt(
        inputFields[1].getText().trim()
    );

    result = DevisionReminder.calculate(
        divisionA, divisionB
    );

    break;


case "Maximum Input":

    String[] maxValues = inputFields[0]
        .getText().trim().split("\\s*,\\s*");

    if (inputFields[0].getText().trim().isEmpty()) {
        resultArea.setText("Please enter numbers.");
        return;
    }

    double[] maxNumbers = new double[maxValues.length];

    for (int i = 0; i < maxValues.length; i++) {
        maxNumbers[i] = Double.parseDouble(maxValues[i]);
    }

    result = MaxInput.calculate(maxNumbers);

    break;

                }

                resultArea.setText(result);

            }
            catch (NumberFormatException ex) {

                resultArea.setText(
                    "Invalid input. Please check your numbers."
                );

            }

        });

        // Main layout
        VBox root = new VBox(15);

        root.setPadding(new Insets(20));

        root.getChildren().addAll(
            titleLabel,
            new Label("Select calculator:"),
            operationComboBox,
            inputGrid,
            runButton,
            resultLabel,
            resultArea
        );

        // Display window
        Scene scene = new Scene(root, 550, 450);

        primaryStage.setScene(scene);
        primaryStage.show();

    }

    public static void main(String[] args) {

        launch(args);

    }
}