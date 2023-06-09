CREATE  PROCEDURE SP_get_idBased_leaves(
@EMPLOYEE_ID INT,
@START_DATE date,
@END_DATE date
)
AS
BEGIN
	DECLARE @APPROVE_LEAVE varchar(200)
    set @APPROVE_LEAVE = (SELECT pm.APPROVE_LEAVE  
    FROM EMPLOYEE_DETAILS ed 
    INNER JOIN PERMISSION_MANAGMENT pm ON ed.ROLE_ID = pm.ROLE_ID
    WHERE EMPLOYEE_ID = @EMPLOYEE_ID)
    IF @APPROVE_LEAVE='true'
    BEGIN
        SELECT *
        FROM LEAVES 
        WHERE APPROVER_EMPLOYEE_ID =@EMPLOYEE_ID AND  START_DATE BETWEEN @START_DATE AND @END_DATE
       ORDER BY LEAVE_REQUEST_ID DESC ;
      END
     ELSE
     BEGIN
        SELECT *
        FROM LEAVES 
        WHERE EMPLOYEE_ID = @EMPLOYEE_ID AND START_DATE BETWEEN @START_DATE AND @END_DATE
       ORDER BY LEAVE_REQUEST_ID DESC ;
       END
END; 
