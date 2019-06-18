package com.javainterviewpoint.dao;

import java.util.List;

import com.javainterviewpoint.model.Employee;

public interface EmployeeDAO
{
    public void createEmployee(Employee employee);
    
    public Employee getEmployeeById(long id);
    public List<Employee> getAllStudents();
    
    public void updateEmployee(Employee employee);
    
    public void deleteEmployee(long id);
}
