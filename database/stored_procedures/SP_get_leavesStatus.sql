CREATE  PROCEDURE SP_get_leavesStatus(
	
	@LEAVE_REQUEST_ID INT,
		@EMPLOYEE_ID INT,
@LEAVES_STATUS varchar(200)

)
AS
BEGIN
	UPDATE LEAVES
	
	SET 
	
		LEAVES_STATUS=@LEAVES_STATUS
	WHERE  LEAVE_REQUEST_ID=@LEAVE_REQUEST_ID  and EMPLOYEE_ID =@EMPLOYEE_ID 
END