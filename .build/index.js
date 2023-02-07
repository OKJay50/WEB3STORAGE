var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_web3 = __toModule(require("web3.storage"));
const token = process.env["WEB3STORAGE_API_TOKEN"];
const client = new import_web3.Web3Storage({ token });
async function uploadAndRetriveFiles() {
  const filesToUpload = await (0, import_web3.getFilesFromPath)("./files");
  const rootCid = await client.put(filesToUpload);
  console.log(rootCid);
  const res = await client.get(rootCid);
  const files = await (res == null ? void 0 : res.files());
  for (const file of files) {
    console.log(`${file.cid} ${file.name} ${file.size}`);
  }
}
uploadAndRetriveFiles();
//# sourceMappingURL=index.js.map
