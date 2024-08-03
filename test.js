const { versioning } = require("./index")
const packageJson = require("./package.json")
const envKey = "REACT_APP_VERSION_INFO"

versioning(envKey, packageJson)
