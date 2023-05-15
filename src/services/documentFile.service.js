const httpStatus = require('http-status');
const { DocumentFile } = require('../models');
const ApiError = require('../utils/ApiError');


/**
 * Create a documentFile
 * @param {Object} 
 * @returns {Promise<DocumentFile>}
 */
const createDocumentFile = async (documentFileBody) => {
  const documentFile = await DocumentFile.create(documentFileBody);
  return documentFile;
};


/**
 * Query for documentFiles
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDocumentFiles = async (filter, options) => {
  const documentFiles = await DocumentFile.paginate(filter, options);
  return documentFiles;
};

/**
 * Get documentFile by id
 * @param {ObjectId} id
 * @returns {Promise<DocumentFile>}
 */
const getDocumentFileById = async (id) => {
  return DocumentFile.findById(id);
};


/**
 * Edit documentFile by id
 * @param {ObjectId} id
 * @returns {Promise<updatedDocumentFile>}
 */

const editDocumentFile = async (id, editBody) => {
    const updatedDocumentFile = await DocumentFile.findByIdAndUpdate({ _id: id }, 
        {
        $set: {
            name: editBody.name,
            description: editBody.description,
            type: editBody.type
        },
    },
        { new: true, upsert: true }
    );
    return updatedDocumentFile;
};

const deleteDocumentFile = async (id) => {
    await DocumentFile.deleteOne({ _id: id }, function (err) { 
        return err
    });    
}

module.exports = {
  createDocumentFile,
  queryDocumentFiles,
  getDocumentFileById,
  editDocumentFile,
  deleteDocumentFile
};
