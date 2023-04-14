ALTER PROCEDURE SP_add_allEmployeeDetails(
    @FIRST_NAME VARCHAR(200),
    @MIDDLE_NAME VARCHAR(200),
    @LAST_NAME VARCHAR(200),
    @GENDER VARCHAR(200),
    @CONTACT_NUMBER VARCHAR(200),
    @EMAIL_ID VARCHAR(200),
    @PANCARD_NUMBER VARCHAR(200),
    @DOB VARCHAR(200),
    @AADHAR_NUMBER VARCHAR(200),
    @DATE_OF_JOINING DATE,
    @LAST_WORKING_DAY DATE,
    @EMPLOYEE_NUMBER VARCHAR(200),
    @BLOOD_GROUP VARCHAR(200),
    @ACTIVATION_STATUS VARCHAR(200),
    @PERMANENT_ADDRESS VARCHAR(200),
    @HOUSE_NO VARCHAR(200),
    @STREET_NAME VARCHAR(200),
    @CITY VARCHAR(200),
    @DISTRICT VARCHAR(200),
    @STATE VARCHAR(200),
    @PINCODE VARCHAR(200),
    @COUNTRY VARCHAR(200),
    @TEMPORARY_ADDRESS VARCHAR(200),
    @T_HOUSE_NO VARCHAR(200),
    @T_STREET_NAME VARCHAR(200),
    @T_CITY VARCHAR(200),
    @T_DISTRICT VARCHAR(200),
    @T_STATE VARCHAR(200),
    @T_PINCODE VARCHAR(200),
    @T_COUNTRY VARCHAR(200),
    @TENTH VARCHAR(200),
    @BOARD_NAME VARCHAR(200),
    @PASSEDOUT_YEAR VARCHAR(200),
    @PERCENTAGE VARCHAR(200),
    @INTERMEDIATE VARCHAR(200),
    @INTER_BOARD_NAME VARCHAR(200),
    @INTER_PASSEDOUT_YEAR VARCHAR(200),
    @INTER_PERCENTAGE VARCHAR(200),
    @GRADUATION VARCHAR(200),
    @UG_UNIVERSITY VARCHAR(200),
    @UG_PASSEDOUT_YEAR VARCHAR(200),
    @UG_PERCENTAGE VARCHAR(200),
    @POST_GRADUTATION VARCHAR(200),
    @PG_UNIVERSITY VARCHAR(200),
    @PG_PASSEDOUT_YEAR VARCHAR(200),
    @PG_PERCENTAGE VARCHAR(200),
    @COMPANY_NAME VARCHAR(200),
    @DESIGNATION VARCHAR(200),
    @FROM_DATE DATE,
    @TO_DATE DATE,
    @DEPT_ID INT,
	@PROJECT_ID INT,
	@ROLE_ID INT,
    @PASSWORD VARCHAR(200),
    @ROLE_NAME VARCHAR(200)
)
AS
BEGIN
    DECLARE @EMPLOYEE_ID AS INT
    INSERT INTO EMPLOYEE_DETAILS(FIRST_NAME,MIDDLE_NAME,LAST_NAME,GENDER,CONTACT_NUMBER,EMAIL_ID,PANCARD_NUMBER,DOB,AADHAR_NUMBER,DATE_OF_JOINING,LAST_WORKING_DAY,EMPLOYEE_NUMBER,BLOOD_GROUP,ACTIVATION_STATUS,DEPT_ID,PROJECT_ID,ROLE_ID,CREATED_DATE_TIME) VALUES(@FIRST_NAME,@MIDDLE_NAME,@LAST_NAME,@GENDER,@CONTACT_NUMBER,@EMAIL_ID,@PANCARD_NUMBER,@DOB,@AADHAR_NUMBER,@DATE_OF_JOINING,@LAST_WORKING_DAY,@EMPLOYEE_NUMBER,@BLOOD_GROUP,@ACTIVATION_STATUS,@DEPT_ID,@PROJECT_ID,@ROLE_ID,GETDATE())
    SET @EMPLOYEE_ID=@@IDENTITY
    INSERT INTO EMPLOYEE_ADDRESS(EMPLOYEE_ID,PERMANENT_ADDRESS,HOUSE_NO,STREET_NAME,CITY,DISTRICT,STATE,PINCODE,COUNTRY,TEMPORARY_ADDRESS,T_HOUSE_NO,T_STREET_NAME,T_CITY,T_DISTRICT,T_STATE,T_PINCODE,T_COUNTRY,CREATED_DATE_TIME) VALUES(@EMPLOYEE_ID,@PERMANENT_ADDRESS,@HOUSE_NO,@STREET_NAME,@CITY,@DISTRICT,@STATE,@PINCODE,@COUNTRY,@TEMPORARY_ADDRESS,@T_HOUSE_NO,@T_STREET_NAME,@T_CITY,@T_DISTRICT,@T_STATE,@T_PINCODE,@T_COUNTRY,GETDATE());
    INSERT INTO EMPLOYEE_EDUCATION(EMPLOYEE_ID,TENTH,BOARD_NAME,PASSEDOUT_YEAR,PERCENTAGE,INTERMEDIATE,INTER_BOARD_NAME,INTER_PASSEDOUT_YEAR,INTER_PERCENTAGE,GRADUATION,UG_UNIVERSITY,UG_PASSEDOUT_YEAR,UG_PERCENTAGE,POST_GRADUTATION,PG_UNIVERSITY,PG_PASSEDOUT_YEAR,PG_PERCENTAGE,CREATED_DATE_TIME) VALUES(@EMPLOYEE_ID,@TENTH,@BOARD_NAME,@PASSEDOUT_YEAR,@PERCENTAGE,@INTERMEDIATE,@INTER_BOARD_NAME,@INTER_PASSEDOUT_YEAR,@INTER_PERCENTAGE,@GRADUATION,@UG_UNIVERSITY,@UG_PASSEDOUT_YEAR,@UG_PERCENTAGE,@POST_GRADUTATION,@PG_UNIVERSITY,@PG_PASSEDOUT_YEAR,@PG_PERCENTAGE,GETDATE());
    INSERT INTO EMPLOYEE_WORK_EXPERIENCE(EMPLOYEE_ID,COMPANY_NAME,DESIGNATION,FROM_DATE,TO_DATE,CREATED_DATE_TIME) VALUES(@EMPLOYEE_ID,@COMPANY_NAME,@DESIGNATION,@FROM_DATE,@TO_DATE,GETDATE());  
    INSERT INTO LOGIN_DETAILS(ROLE_ID,ROLE_NAME,EMPLOYEE_ID,USERNAME,PASSWORD,CREATED_DATE_TIME)VALUES(@EMPLOYEE_ID,@EMAIL_ID,@PASSWORD,GETDATE());
END

