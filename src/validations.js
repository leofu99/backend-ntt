import { VALID_DOCUMENT_TYPES } from "./constant.js";

export const validateDocument = (document) => {
  if (!document) return false;
  if (document.length < 8 || document.length > 11) return false;
  if (Number.isNaN(document)) return false;
  return true;
};

export const validateDocumentType = (documentType) => {
  if (!documentType) return false;
  if (!VALID_DOCUMENT_TYPES.includes(documentType)) return false;
  return true;
};
