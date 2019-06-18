package com.javainterviewpoint.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.javainterviewpoint.model.Employee;

@Service
@Transactional(propagation = Propagation.REQUIRED)
public class EmployeeDAOImpl implements EmployeeDAO
{

    @PersistenceContext
    private EntityManager entityManager;
    
   

    

    @Override
    public List<Employee> getAllStudents()
    {
        return entityManager.createQuery("from Employee").getResultList();
    }



	@Override
	public void createEmployee(Employee employee) {
		
		entityManager.persist(employee);
	}



	@Override
	public void updateEmployee(Employee employee) {
		
		entityManager.merge(employee);
	}



	@Override
	public void deleteEmployee(long id) {
		
		Employee emp=entityManager.find(Employee.class, id);
		
		entityManager.remove(emp);
	}



	@Override
	public Employee getEmployeeById(long id) {
		
		return entityManager.find(Employee.class, id);
	}

    
}
