package com.irie.dos.docinfo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="do_db")
public class DocInfo implements Serializable{
	@Id
	@GeneratedValue
	@Column(name="id")
	Long id;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@Column(name="Practice_Name")
	String practiceName;
	@Column(name="Address")
	String address;
	@Column(name="Address2")
	String address2;
	@Column(name="City")
	String city;
	@Column(name="State")
	String state;
	@Column(name="Zip")
	String zip;
	@Column(name="County")
	String county;
	@Column(name="Phone")
	String phone;
	@Column(name="Fax")
	String fax;
	@Column(name="First_Name")
	String firstName;
	@Column(name="Last_Name")
	String lastName;
	@Column(name="Full_Name")
	String fullName;
	@Column(name="Email")
	String email;
	@Column(name="Gender")
	String gender;	
	@Column(name="Title")
	String title;
	@Column(name="Specialty")
	String specialty	;
	@Column(name="SIC_Code")
	String sicCode;
	@Column(name="Employees")
	String employees;
	@Column(name="Sales")
	String sales;
	@Column(name="Latitude")
	String latitude;
	@Column(name="Longitude")
	String longitude;
	@Column(name="Website")
	String website;
	@Column(name="Membership")
	String aoaMembership;
	@Column(name="Publications")
	String publications;
	
	public String getPublications() {
		return publications;
	}
	public void setPublications(String publications) {
		this.publications = publications;
	}
	public String getAoaMembership() {
		return aoaMembership;
	}
	public void setAoaMembership(String aoaMembership) {
		this.aoaMembership = aoaMembership;
	}
	public String getPracticeName() {
		return practiceName;
	}
	public void setPracticeName(String practiceName) {
		this.practiceName = practiceName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getCounty() {
		return county;
	}
	public void setCounty(String county) {
		this.county = county;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSpecialty() {
		return specialty;
	}
	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}
	public String getSicCode() {
		return sicCode;
	}
	public void setSicCode(String sicCode) {
		this.sicCode = sicCode;
	}
	public String getEmployees() {
		return employees;
	}
	public void setEmployees(String employees) {
		this.employees = employees;
	}
	public String getSales() {
		return sales;
	}
	public void setSales(String sales) {
		this.sales = sales;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	
	
	

}
