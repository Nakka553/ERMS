
ALTER PROCEDURE SP_delete_leave(
   @LEAVE_REQUEST_ID  int
)

AS
BEGIN
    DELETE FROM LEAVES 
    WHERE LEAVE_REQUEST_ID =@LEAVE_REQUEST_ID

END