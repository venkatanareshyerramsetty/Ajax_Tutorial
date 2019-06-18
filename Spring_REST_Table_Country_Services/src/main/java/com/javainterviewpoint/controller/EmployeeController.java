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

import com.javainterviewpoint.dao.CountryDAOImpl;
import com.javainterviewpoint.model.Country;



@RestController
public class EmployeeController
{
    @Autowired
    private CountryDAOImpl employeeDAOImpl;
    
    
    
    /*** Creating a new country ***/
    @RequestMapping(value="/createCountry", method= {RequestMethod.POST},
            produces="application/json", consumes="application/json")
    public void createCountry(@RequestBody Country country)
    {
    	employeeDAOImpl.createCountry(country);
    }
    
    
    
    /*** Retrieve all CountryDetails ***/
    @RequestMapping(value="/countryDetails",produces="application/json",
            method=RequestMethod.GET) 
    public List<Country> getAllCountryDetails(){
    	
    	List<Country> countryList = employeeDAOImpl.getAllCountriesDetails();
    	
    	return countryList;
    }
    
    
    
    /*** Retrieve a single states by country ***/
    @RequestMapping(value="/states/{country}",produces="application/json",
            method=RequestMethod.GET)
    public Country getEmployeeById(@PathVariable("country") String country)
    {
    	Country states = employeeDAOImpl.getStatesByCountry(country);
        return states;
    }
    
    
    /*** Update a country ***/
    @RequestMapping(value="/updateCountry", method=RequestMethod.PUT, 
            produces="application/json", consumes="application/json")
    public void updateEmployee(@RequestBody Country country)
    {
    	employeeDAOImpl.updateCountryData(country);
    	
    }
    
    /*** Delete a country ***/
    @RequestMapping(value="/deleteCountry/{country}",produces="application/json")
    public void deleteEmployee(@PathVariable("country") String country)
    {
        employeeDAOImpl.deleteCountry(country);
    }
    
    
}
