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
    
    
    /*** Retrieve all employees ***/
    @RequestMapping(value="/employees",produces="application/json",
            method=RequestMethod.GET)
    
    public ModelAndView getAllStudents() {
    	
    	List<Employee> studentList = employeeDAOImpl.getAllStudents();
    	
    	ModelAndView modelView=new ModelAndView();
    	
    	modelView.setViewName("table.jsp");
        
        modelView.addObject("empList", studentList);
    	
		return modelView;
    	
    }
    
    
   /* public List<Employee> getAllemployees(){
    	
    	List<Employee> studentList = employeeDAOImpl.getAllStudents();
    	
    	return studentList;
    }*/
    
    
}
