const Joi = require('joi');

module.exports.validateIdea = (idea) => {
    const schema = Joi.object({
        title: Joi.string().max(32).min(3).required(),
        content: Joi.string().max(256).min(3).required(),
        firstname: Joi.string().max(16).min(3).required(),
        lastname: Joi.string().max(16).min(3).required()
    });

    return schema.validate(idea);
};