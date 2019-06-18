package com.javainterviewpoint.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.javainterviewpoint.model.Country;


@Service
@Transactional(propagation = Propagation.REQUIRED)
public class CountryDAOImpl implements CountryDAO
{

    @PersistenceContext
    private EntityManager entityManager;
    
    

	@Override
	public void createCountry(Country country) {
		
		entityManager.persist(country);
		
	}

	@Override
	public Country getStatesByCountry(String country) {
		
		return entityManager.find(Country.class, country);
	}

	@Override
	public List<Country> getAllCountriesDetails() {
		
		return entityManager.createQuery("from Country").getResultList();
	}

	@Override
	public void updateCountryData(Country country) {
		
		entityManager.merge(country);
		
	}

	@Override
	public void deleteCountry(String country) {

		Country obj =entityManager.find(Country.class, country);
		
		entityManager.remove(obj);
		
	}
    
   

    

	
    
}
