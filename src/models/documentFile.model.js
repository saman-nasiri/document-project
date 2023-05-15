const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { docsType } = require('../config/config');

const documentFileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
      type: String,
      enum: docsType,
      default: 'text',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
documentFileSchema.plugin(toJSON);
documentFileSchema.plugin(paginate);

/**
 * @typedef documentFile
 */
const documentFile = mongoose.model('documentFile', documentFileSchema);

module.exports = documentFile;
