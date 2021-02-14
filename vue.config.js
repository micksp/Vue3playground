module.exports = {
    // The dev server isn't accepting external requests
    // which we need in gitpod because it's running in docker
    devServer: {
        disableHostCheck: true
    }
}