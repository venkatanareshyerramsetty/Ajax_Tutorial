package com.javainterviewpoint.dao;

import java.util.List;

import com.javainterviewpoint.model.Country;


public interface CountryDAO
{
    public void createCountry(Country country);
    
    public Country getStatesByCountry(String country);
    public List<Country> getAllCountriesDetails();
    
    public void updateCountryData(Country country);
    
    public void deleteCountry(String country);
}
