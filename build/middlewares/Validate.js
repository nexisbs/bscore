"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used to validate a POST params
 *
 * @param schema
 * @returns
 */
function validateParams(schema) {
    return function (req, res, next) {
        let result = schema.validate(req.body);
        if (result.error) {
            // @TODO use error class, which will be exported in index.ts file
            return next(result.error);
        }
        return next();
    };
}
exports.default = validateParams;
