CREATE TABLE PROJECTS(
	PROJECT_ID INT IDENTITY(1,1) PRIMARY KEY,
	PROJECT_NAME VARCHAR(200) NOT NULL,
	START_DATE DATE,
	END_DATE DATE,
	PROJECT_MANAGER VARCHAR(200) NOT NULL,
	CREATED_DATE_TIME DATETIME,
	UPDATED_DATE_TIME DATETIME
);