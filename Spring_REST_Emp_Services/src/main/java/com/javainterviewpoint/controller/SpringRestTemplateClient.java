package com.javainterviewpoint.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import com.javainterviewpoint.model.Employee;

public class SpringRestTemplateClient
{
    public static final String REST_BASE_URI = "http://localhost:8080/SpringRestHibernate";
   
    static RestTemplate restTemplate = new RestTemplate();
    
   
    
    public static void getAllStudents()
    {
       

        List<Map<String, Object>> studentList = restTemplate.getForObject(REST_BASE_URI + "/students", List.class);
        if (studentList != null)
        {
            System.out.println("**** All Students ****");
            for (Map<String, Object> map : studentList)
            {
                System.out.println("Id : id=" + map.get("id") + "   Name=" + map.get("name") + "   Age="
                        + map.get("age"));
            }
        } else
        {
            System.out.println("No Students exist!!");
        }
    }
    
   
    public static void main(String args[])
    {
        
        
        getAllStudents();
       
        
       
    }
}
