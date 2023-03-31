CREATE procedure SP_add_roles(
    @ROLE_NAME VARCHAR(200),
	@DEPARTMENT_NAME VARCHAR(200),
	@ROLE_DESCRIPTION VARCHAR(200)
);
AS
BEGIN
    INSERT INTO ROLES(ROLE_NAME,DEPARTMENT_NAME,ROLE_DESCRIPTION,CREATED_DATE_TIME) VALUES(@ROLE_NAME,@DEPARTMENT_NAME,@ROLE_DESCRIPTION,GETDATE())

END