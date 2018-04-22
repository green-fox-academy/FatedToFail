import java.util.Scanner;

public class PracticePeriod {
  public static void main(String[] args) {
    System.out.println("Hello, Roni");

    System.out.println("Hello, Sári");
    System.out.println("Hello, Peti");
    System.out.println("Hello, Dóri");

    System.out.println("The result of 22 + 13 is: " + (22 + 13));

    byte courseLength = 17;
    byte codingHoursADay = 6;
    byte workDaysAWeek = 5;
    int averageHoursSpentCodingInGreenFox = courseLength * codingHoursADay * workDaysAWeek;

    System.out.println(averageHoursSpentCodingInGreenFox);

    byte averageWeeklyWorkHours = 5;

    System.out.println("We do " + ((workDaysAWeek * codingHoursADay * 100) / averageWeeklyWorkHours) + "% programming compared to a full time worker.");

    double massInKg = 81.2;
    double heightInM = 1.78;
    double bodyMassIndex = massInKg / (heightInM * heightInM);

    System.out.println(bodyMassIndex);

    int currentHours = 14;
    int currentMinutes = 34;
    int currentSeconds = 42;

    System.out.println("There's " + (24 * 60 * 60 - currentHours * 3600 - currentMinutes * 60 - currentSeconds) + " seconds left from the day");

    Scanner scanner = new Scanner(System.in);

    byte chickensOnFarm = scanner.nextByte();
    byte pigsOnFarm = scanner.nextByte();

    System.out.println("You have " + (chickensOnFarm * 2 + 2 + pigsOnFarm * 4) + " legs on your farm, including yourself");
  }
}
