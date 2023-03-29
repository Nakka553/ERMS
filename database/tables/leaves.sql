CREATE TABLE LEAVES(
	LEAVE_REQUEST_ID INT IDENTITY(1,1) PRIMARY KEY,
	EMPLOYEE_ID INT,
	EMPLOYEE_NAME VARCHAR(200) NOT NULL,
	APPROVER_EMPLOYEE_ID INT,
	APPROVER_NAME VARCHAR(200) NOT NULL,
	REASON_FOR_LEAVE VARCHAR(200) NOT NULL,
	START_DATE DATE,
	END_DATE DATE,
	CREATED_DATE_TIME DATETIME,
	UPDATED_DATE_TIME DATETIME,
	FOREIGN KEY(EMPLOYEE_ID) REFERENCES EMPLOYEE_DETAILS(EMPLOYEE_ID)
);