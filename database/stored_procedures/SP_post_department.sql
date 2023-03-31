CREATE PROCEDURE SP_post_department(
	@DEPT_NAME VARCHAR(200),
	@HOD VARCHAR(200),
	@DEPT_EMAIL VARCHAR(200),
	@DEPT_CONTACTNUMBER VARCHAR(200)
)
AS
BEGIN
	INSERT INTO DEPARTMENT  (DEPT_NAME,HOD,DEPT_EMAIL,DEPT_CONTACTNUMBER,CREATED_DATE_TIME) VALUES(@DEPT_NAME,@HOD,@DEPT_EMAIL,@DEPT_CONTACTNUMBER,GETDATE())
END