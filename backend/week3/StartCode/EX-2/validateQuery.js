function validateCourseQueryParams(req, res, next) {
    const { minCredits, maxCredits } = req.query;

    if (minCredits !== undefined) {
        const min = Number(minCredits);
        if (!Number.isInteger(min)) {
            return res.status(400).json({ error: 'minCredits must be a valid integer' });
        }
    }

    if (maxCredits !== undefined) {
        const max = Number(maxCredits);
        if (!Number.isInteger(max)) {
            return res.status(400).json({ error: 'maxCredits must be a valid integer' });
        }
    }

    if (minCredits !== undefined && maxCredits !== undefined) {
        const min = Number(minCredits);
        const max = Number(maxCredits);

        if (min > max) {
            return res.status(400).json({ error: 'minCredits cannot be greater than maxCredits' });
        }
    }

    next();
}

export default validateCourseQueryParams;