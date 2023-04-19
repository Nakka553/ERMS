CREATE PROCEDURE SP_get_empProjectManagerDeatils(
@EMPLOYEE_ID INT
)
AS
BEGIN
	select ed2.EMPLOYEE_ID ,p3.PROJECT_ID ,p3.PROJECT_MANAGER,p3.PROJECT_NAME 
	from EMPLOYEE_DETAILS ed2 
	inner join PROJECTS p3
	on ed2.PROJECT_ID = p3.PROJECT_ID 
	where EMPLOYEE_ID =@EMPLOYEE_ID
END