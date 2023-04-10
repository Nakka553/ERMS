CREATE procedure SP_get_roles
    @ROLE_ID int
AS
BEGIN
    SELECT * from ROLES;
    where ROLE_ID=@ROLE_ID;
END