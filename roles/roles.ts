import dotenv from "dotenv";

/**
 * If you will be facing issue with not populating passwords, please add { path: "ICEModels/.env" } to config parameters
 * This might happen when you're running tests via VSCode extension and your working directory is whole Automation.Testing (not only ICE Models)
 */

dotenv.config();

export const adminusername = process.env.FULL_ACCESS_USER_NAME || "";
export const adminpassword = process.env.FULL_ACCESS_PASSWORD || "";

export const readonlyusername = process.env.READ_ONLY_USER_NAME || "";
export const readonlypassword = process.env.READ_ONLY_PASSWORD || "";