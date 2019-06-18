package com.javainterviewpoint.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.javainterviewpoint.dao.EmployeeDAOImpl;
import com.javainterviewpoint.model.Employee;



@RestController
public class EmployeeController
{
    @Autowired
    private EmployeeDAOImpl employeeDAOImpl;
    
    
    
    /*** Creating a new Student ***/
    @RequestMapping(value="/create", method= {RequestMethod.POST},
            produces="application/json", consumes="application/json")
    public void createStudent(@RequestBody Employee employee)
    {
    	employeeDAOImpl.createEmployee(employee);
    }
    
    
    
    /*** Retrieve all employees ***/
    @RequestMapping(value="/employees",produces="application/json",
            method=RequestMethod.GET) 
    public List<Employee> getAllemployees(){
    	
    	List<Employee> studentList = employeeDAOImpl.getAllStudents();
    	
    	return studentList;
    }
    
    
    
    /*** Retrieve a single Student ***/
    @RequestMapping(value="/employee/{id}",produces="application/json",
            method=RequestMethod.GET)
    public Employee getEmployeeById(@PathVariable("id") long id)
    {
    	Employee employee = employeeDAOImpl.getEmployeeById(id);
        return employee;
    }
    
    
    /*** Update a Student ***/
    @RequestMapping(value="/updateEmployee", method=RequestMethod.PUT, 
            produces="application/json", consumes="application/json")
    public void updateEmployee(@RequestBody Employee employee)
    {
    	employeeDAOImpl.updateEmployee(employee);
    	
    }
    
    /*** Delete a Student ***/
    @RequestMapping(value="/deleteEmployee/{id}",produces="application/json")
    public void deleteEmployee(@PathVariable("id") long id)
    {
        employeeDAOImpl.deleteEmployee(id);
    }
    
    
}
