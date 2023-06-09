CREATE  PROCEDURE SP_get_Approved_timesheet(
@EMPLOYEE_ID INT
)
AS
BEGIN
	DECLARE @APPROVE_TIMESHEET varchar(200)
    set @APPROVE_TIMESHEET = (SELECT pm.APPROVE_TIMESHEET 
    FROM EMPLOYEE_DETAILS ed 
    INNER JOIN PERMISSION_MANAGMENT pm ON ed.ROLE_ID = pm.ROLE_ID
    WHERE EMPLOYEE_ID = @EMPLOYEE_ID)
    IF @APPROVE_TIMESHEET='true'
    BEGIN
        SELECT *
        FROM TIMESHEET
        WHERE APPROVER_EMPLOYEE_ID =@EMPLOYEE_ID;
      END
     ELSE
     BEGIN
        SELECT *
        FROM TIMESHEET
        WHERE EMPLOYEE_ID = @EMPLOYEE_ID;
       END
END;
