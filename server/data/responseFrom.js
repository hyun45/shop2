exports.responseFromData = (state, message, data) => {
    return {
        state: state, 
        message: message,
        data: data
    };
};