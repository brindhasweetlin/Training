import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of subjects: ");
        int numSubjects = scanner.nextInt();

        int totalGrade = 0;
        for (int i = 1; i <= numSubjects; i++) {
            System.out.print("Enter the grade for subject " + i + ": ");
            int grade = scanner.nextInt();
            totalGrade += grade;
        }

        double averageGrade = (double) totalGrade / numSubjects;
        System.out.println("\nAverage grade: " + averageGrade);

        char choice = 'Y';
        scanner.nextLine(); // Clear the newline character

        while (choice == 'Y' || choice == 'y') {
            System.out.print("\nDo you want to know your grade category? (Y/N): ");
            choice = scanner.nextLine().charAt(0);

            if (choice == 'Y' || choice == 'y') {
                String gradeCategory = getGradeCategory(averageGrade);
                System.out.println("Grade Category: " + gradeCategory);
            }
        }

        System.out.println("\nThank you for using the Grade Calculator!");
        scanner.close();
    }

    public static String getGradeCategory(double averageGrade) {
        if (averageGrade >= 90) {
            return "Excellent";
        } else if (averageGrade >= 80) {
            return "Good";
        } else if (averageGrade >= 70) {
            return "Average";
        } else if (averageGrade >= 60) {
            return "Below Average";
        } else {
            return "Fail";
        }
    }
}
