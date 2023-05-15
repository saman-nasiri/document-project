const Joi = require('@hapi/joi');
const { password, objectId } = require('./custom.validation');

const createDocumentFile = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().required().valid('text', 'image', 'video'),
  }),
};

const getDocumentFiles = {
  query: Joi.object().keys({
    name: Joi.string(),
    type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDocumentFile = {
  params: Joi.object().keys({
    dfid: Joi.string().custom(objectId),
  }),
};

const editDocumentFile = {
    params: Joi.object().keys({
      dfid: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
      name: Joi.string(),
      description: Joi.string(),
      type: Joi.string(),
    }),
  };
  
  const deleteDocumentFile = {
    params: Joi.object().keys({
      dfid: Joi.string().custom(objectId),
    })
  };
  

module.exports = {
  createDocumentFile,
  getDocumentFiles,
  getDocumentFile,
  editDocumentFile,
  deleteDocumentFile
};
