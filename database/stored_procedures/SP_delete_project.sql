CREATE PROCEDURE SP_delete_project
(
    @PROJECT_ID INT
)

AS
BEGIN
    DELETE FROM PROJECTS
    WHERE PROJECT_ID=@PROJECT_ID
END