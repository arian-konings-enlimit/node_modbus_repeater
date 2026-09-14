module.exports = {
    flowFile: "flow-modbus-repeater.json",
    userDir: __dirname,
    httpAdminRoot: "/",
    uiPort: process.env.PORT || 1880,
    functionExternalModules: true,
    editorTheme: {
        projects: {
            enabled: false
        }
    }
};
