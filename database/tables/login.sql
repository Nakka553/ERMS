CREATE TABLE LOGIN_DETAILS(
	EMPLOYEE_ID INT,
	LOGIN_ID INT IDENTITY(1,1) PRIMARY KEY,
	USERNAME VARCHAR(200) NOT NULL,
	PASSWORD VARCHAR(200) NOT NULL,
	CREATED_DATE_TIME DATETIME,
	UPDATED_DATE_TIME DATETIME,
	FOREIGN KEY(EMPLOYEE_ID) REFERENCES EMPLOYEE_DETAILS(EMPLOYEE_ID)
);