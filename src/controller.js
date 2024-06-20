import { VALID_DOCUMENT } from "./constant.js";
import { validUser } from "./data.js";
import { validateDocument, validateDocumentType } from "./validations.js";

export const getUserByDocument = (req, res) => {
  const { query } = req;
  if (!validateDocument(query.document)) {
    return res.status(400).json({ message: "invalid document number" });
  }
  if (!validateDocumentType(query.documentType)) {
    return res.status(400).json({ message: "invalid document type" });
  }
  if (query.document !== VALID_DOCUMENT || query.documentType !== "C") {
    return res.status(404).json({ message: "user not found" });
  }

  return res.status(200).json({ message: "User found", data: validUser });
};
