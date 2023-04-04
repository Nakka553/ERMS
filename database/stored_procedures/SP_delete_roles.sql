CREATE PROCEDURE SP_delete_roles(
    @id INT
);
AS
BEGIN
		DELETE FROM ROLES 
		WHERE ROLE_ID  = @id
 END
    
