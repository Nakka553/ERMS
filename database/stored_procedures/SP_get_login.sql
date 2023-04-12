ALTER PROCEDURE SP_get_login(
	@username VARCHAR(200)
)
AS
BEGIN
	select * from [User] u where USERNAME =@username
	
END

