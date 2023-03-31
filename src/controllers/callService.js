const callService = async (method, req, res) => {
    try {
        var result = await method(req);
<<<<<<< HEAD
        res.status(result.status).json({
=======
        res.status(200).json({
>>>>>>> 6d568de804396042d465b1c309593e1037ba53c9
            status: result.status,
            message: result.message,
            data: result.data
        })
    } catch (err) {
<<<<<<< HEAD
        res.status(result.status).json({
=======
        res.status(401).json({
>>>>>>> 6d568de804396042d465b1c309593e1037ba53c9
            message: "Error"
        })
    }
}
<<<<<<< HEAD

module.exports = {callService}
=======
module.exports={callService}
>>>>>>> 6d568de804396042d465b1c309593e1037ba53c9
