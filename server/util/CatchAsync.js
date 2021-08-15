module.exports = (func, status = 500) => {
    return (req, res, next) => {
        try {
            func(req, res, next);
        } catch (e) {
            if (!e.status) {
                e.status = status;
            }
            next(e);
        }
    }
}