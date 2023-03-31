const callService = async (method, req, res) => {
    try {
        var result = await method(req);
        res.status(result.status).json({
            status: result.status,
            message: result.message,
            data: result.data
        })
    } catch (err) {
        res.status(result.status).json({
            message: "Error"
        })
    }
}

module.exports = {callService}
