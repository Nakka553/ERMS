CREATE PROCEDURE SP_check_roleDetailsModel(
@ROLE_NAME VARCHAR(200)
)
AS
BEGIN
   SELECT * FROM ROLES r WHERE ROLE_NAME  = @ROLE_NAME 
END
