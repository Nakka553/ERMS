CREATE PROCEDURE SP_edit_allEmployeesDetails(
    @EMPLOYEE_ID INT,
    @EMPLOYEE_NUMBER varchar(200),
    @FIRST_NAME varchar(200),
    @MIDDLE_NAME varchar(200),
    @LAST_NAME varchar(200),
    @GENDER varchar(200),
    @CONTACT_NUMBER varchar(200),
    @EMAIL_ID varchar(200),
    @PANCARD_NUMBER varchar(200),
    @DOB varchar(200),
    @AADHAR_NUMBER varchar(200),
    @DATE_OF_JOINING date,
    @LAST_WORKING_DAY date,
    @BLOOD_GROUP varchar(100),
    @ACTIVATION_STATUS varchar(100),
    @DEPT_ID INT,
    @PROJECT_ID INT,
    @ROLE_ID INT,
    @PERMANENT_ADDRESS varchar(200),
    @HOUSE_NO varchar(200),
    @STREET_NAME varchar(200),
    @CITY varchar(200),
    @DISTRICT varchar(200),
    @STATE varchar(200),
    @PINCODE varchar(200),
    @COUNTRY varchar(200),
    @TEMPORARY_ADDRESS varchar(200),
    @T_HOUSE_NO varchar(200),
    @T_STREET_NAME varchar(200),
    @T_CITY varchar(200),
    @T_DISTRICT varchar(200),
    @T_STATE varchar(200),
    @T_PINCODE varchar(200),
    @T_COUNTRY varchar(200),
    @TENTH varchar(200),
    @BOARD_NAME varchar(200),
    @PASSEDOUT_YEAR varchar(200),
    @PERCENTAGE varchar(200),
    @INTERMEDIATE varchar(200),
    @INTER_BOARD_NAME varchar(200),
    @INTER_PASSEDOUT_YEAR varchar(200),
    @INTER_PERCENTAGE varchar(200),
    @GRADUATION varchar(200),
    @UG_UNIVERSITY varchar(200),
    @UG_PASSEDOUT_YEAR varchar(200),
    @UG_PERCENTAGE varchar(200),
    @POST_GRADUTATION varchar(200),
    @PG_UNIVERSITY varchar(200),
    @PG_PASSEDOUT_YEAR varchar(200),
    @PG_PERCENTAGE varchar(200),
    @COMPANY_NAME varchar(200),
    @DESIGNATION varchar(200),
    @FROM_DATE date,
    @TO_DATE date

)
AS
BEGIN
    UPDATE EMPLOYEE_DETAILS 
    SET 
        EMPLOYEE_NUMBER = @EMPLOYEE_NUMBER,
        FIRST_NAME = @FIRST_NAME,
        MIDDLE_NAME = @MIDDLE_NAME,
        LAST_NAME = @LAST_NAME,
        GENDER = @GENDER,
        CONTACT_NUMBER = @CONTACT_NUMBER,
        EMAIL_ID = @EMAIL_ID,
        PANCARD_NUMBER = @PANCARD_NUMBER,
        DOB = @DOB,
        AADHAR_NUMBER = @AADHAR_NUMBER,
        DATE_OF_JOINING = @DATE_OF_JOINING,
        LAST_WORKING_DAY = @LAST_WORKING_DAY,
        BLOOD_GROUP = @BLOOD_GROUP,
        ACTIVATION_STATUS = @ACTIVATION_STATUS,
        DEPT_ID = @DEPT_ID,
        PROJECT_ID =   @PROJECT_ID,
        ROLE_ID = @ROLE_ID,
        UPDATED_DATE_TIME = GETDATE()
    WHERE  EMPLOYEE_ID = @EMPLOYEE_ID

    UPDATE EMPLOYEE_ADDRESS 
        SET 
        PERMANENT_ADDRESS = @PERMANENT_ADDRESS,
        HOUSE_NO= @HOUSE_NO,
        STREET_NAME=@STREET_NAME,
        CITY = @CITY,
        DISTRICT = @DISTRICT,
        STATE = @STATE,
        PINCODE = @PINCODE,
        COUNTRY = @COUNTRY,
        TEMPORARY_ADDRESS = @TEMPORARY_ADDRESS,
        T_HOUSE_NO = @T_HOUSE_NO,
        T_STREET_NAME=@T_STREET_NAME,
        T_CITY = @T_CITY,
        T_DISTRICT = @T_DISTRICT,
        T_STATE = @T_STATE,
        T_PINCODE = @T_PINCODE,
        T_COUNTRY = @T_COUNTRY,
        UPDATED_DATE_TIME = GETDATE()
    WHERE  EMPLOYEE_ID = @EMPLOYEE_ID

    UPDATE EMPLOYEE_EDUCATION
        SET 
        TENTH = @TENTH,
        BOARD_NAME = @BOARD_NAME,
        PASSEDOUT_YEAR = @PASSEDOUT_YEAR,
        PERCENTAGE = @PERCENTAGE,
        INTERMEDIATE = @INTERMEDIATE,
        INTER_BOARD_NAME = @INTER_BOARD_NAME,
        INTER_PASSEDOUT_YEAR = @INTER_PASSEDOUT_YEAR,
        INTER_PERCENTAGE = @INTER_PERCENTAGE,
        GRADUATION = @GRADUATION,
        UG_UNIVERSITY = @UG_UNIVERSITY,
        UG_PASSEDOUT_YEAR = @UG_PASSEDOUT_YEAR,
        UG_PERCENTAGE = @UG_PERCENTAGE,
        POST_GRADUTATION = @POST_GRADUTATION,
        PG_UNIVERSITY = @PG_UNIVERSITY,
        PG_PASSEDOUT_YEAR = @PG_PASSEDOUT_YEAR,
        PG_PERCENTAGE = @PG_PERCENTAGE,
        UPDATED_DATE_TIME = GETDATE()
    WHERE EMPLOYEE_ID= @EMPLOYEE_ID

    UPDATE EMPLOYEE_WORK_EXPERIENCE
        SET 
        COMPANY_NAME =@COMPANY_NAME,
        DESIGNATION = @DESIGNATION,
        FROM_DATE = @FROM_DATE,
        TO_DATE = @TO_DATE,
        UPDATED_DATE_TIME = GETDATE()
    WHERE EMPLOYEE_ID = @EMPLOYEE_ID

END
