package com.javainterviewpoint.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="INFORMATION")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement(name = "Country")
public class Country implements Serializable
{
   


	public Country() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	private static final long serialVersionUID = -1232395859408322328L;

   

	@Id
    @Column(name="country")
    private String country;
    
    @Column(name="states")
    private String states;
    
    @Column(name="districts")
    private String districts;
    
    public Country(String country, String states, String districts) {
		super();
		this.country = country;
		this.states = states;
		this.districts = districts;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getStates() {
		return states;
	}

	public void setStates(String states) {
		this.states = states;
	}

	public String getDistricts() {
		return districts;
	}

	public void setDistricts(String districts) {
		this.districts = districts;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
	@Override
	public String toString() {
		return "Country [country=" + country + ", states=" + states + ", districts=" + districts + "]";
	}

	

    
   
    
    
    

	
}
