// File: Employee.java

public class Employee {
    private int employeeId;
    protected String employeeName;
    public double employeeSalary;

    public Employee(int id, String name, double salary) {
        employeeId = id;
        employeeName = name;
        employeeSalary = salary;
    }

    private void calculateBonus() {
        // Some logic to calculate bonus
        double bonus = employeeSalary * 0.1;
        System.out.println("Bonus: " + bonus);
    }

    protected void displayEmployeeDetails() {
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Employee Name: " + employeeName);
        System.out.println("Employee Salary: " + employeeSalary);
    }

    public void displayEmployeeDetails(String department) {
        System.out.println("Employee Department: " + department);
        displayEmployeeDetails(); // Invoking the other displayEmployeeDetails() method
    }

    public static void main(String[] args) {
        Employee employee = new Employee(101, "John Doe", 50000);

        employee.displayEmployeeDetails(); // This will print the employee details

        employee.displayEmployeeDetails("Finance"); // This will print the employee details along with the department
    }
}
