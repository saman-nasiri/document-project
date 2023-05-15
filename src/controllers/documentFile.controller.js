const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const ApiSuccess = require('../utils/ApiSuccess');
const catchAsync = require('../utils/catchAsync');
const { documentFileService } = require('../services');


const createDocumentFile = catchAsync(async (req, res) => {
  const documentFile = await documentFileService.createDocumentFile(req.body);
  const result = ApiSuccess(documentFile, 'DocumentFileIsCreated', httpStatus.CREATED);
  res.status(httpStatus.CREATED).send(result);
});

const getDocumentFiles = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await documentFileService.queryDocumentFiles(filter, options);
  res.send(result);
});

const getDocumentFile = catchAsync(async (req, res) => {
  const documentFile = await documentFileService.getDocumentFileById(req.params.dfid);
  if (!documentFile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'DocumentFile not found');
  }
  res.send(documentFile);
});

const editDocumentFile = catchAsync(async (req, res) => {
  const documentFile = await documentFileService.getDocumentFileById(req.params.dfid);
  if (!documentFile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'DocumentFile not found');
  }
  const editedDocFile = await documentFileService.editDocumentFile(req.params.dfid, req.body);
  res.send(editedDocFile);
});

const deleteDocumentFile = catchAsync(async(req, res) => {
    await documentFileService.deleteDocumentFile(req.params.dfid);
    res.send({ statusCode: "200", message: "DocumentFile is Deleted." });
});

module.exports = {
  createDocumentFile,
  getDocumentFiles,
  getDocumentFile,
  editDocumentFile,
  deleteDocumentFile
};
