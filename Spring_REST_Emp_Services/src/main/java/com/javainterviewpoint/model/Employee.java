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
@Table(name="EMP")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement(name = "Employee")
public class Employee implements Serializable
{
    public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}


	private static final long serialVersionUID = -1232395859408322328L;

   

	@Id
    @Column(name="empno")
    private long empno;
    
    @Column(name="ename")
    private String ename;
    
    @Column(name="job")
    private String job;
    
    @Column(name="mgr")
    private int mgr;
    
    @Column(name="hiredate")
    private String hiredate;
    
    @Column(name="sal")
    private long sal;
    
    @Column(name="comm")
    private int comm;
    
    @Column(name="deptno")
    private int deptno;
    
    
    public Employee(long empno, String ename, String job, int mgr, String hiredate, long sal, int comm, int deptno) {
		super();
		this.empno = empno;
		this.ename = ename;
		this.job = job;
		this.mgr = mgr;
		this.hiredate = hiredate;
		this.sal = sal;
		this.comm = comm;
		this.deptno = deptno;
	}
    
    
    
    

	public long getEmpno() {
		return empno;
	}

	public void setEmpno(long empno) {
		this.empno = empno;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public int getMgr() {
		return mgr;
	}

	public void setMgr(int mgr) {
		this.mgr = mgr;
	}

	public String getHiredate() {
		return hiredate;
	}

	public void setHiredate(String hiredate) {
		this.hiredate = hiredate;
	}

	public long getSal() {
		return sal;
	}

	public void setSal(long sal) {
		this.sal = sal;
	}  

	public long getComm() {
		return comm;
	}

	public void setComm(int comm) {
		this.comm = comm;
	}

	public int getDeptno() {
		return deptno;
	}

	
 
	public void setDeptno(int deptno) {
		this.deptno = deptno;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	 @Override
		public String toString() {
			return "Student [empno=" + empno + ", ename=" + ename + ", job=" + job + ", mgr=" + mgr + ", hiredate="
					+ hiredate + ", sal=" + sal + ", comm=" + comm + ", deptno=" + deptno + "]";
		}

   
}
