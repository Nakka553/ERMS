CREATE PROCEDURE SP_delete_project
(
    @id INT
)

AS
BEGIN
    DELETE FROM PROJECTS
    WHERE PROJECT_ID=@id
END