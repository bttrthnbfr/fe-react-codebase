export default {
  NETWORK_ERROR: ({ details } = {}) => ({
    code: 22222,
    message: 'errors.network error',
    details,
  }),
};

export const parseErrorCode = {
  99999: 'Something went wrong', // default error when error code not specified
  22222: 'Network error, please check your internet connection',
  11111: 'Something went wrong, please wait a minutes and try again',
  10001: 'Validation error',
  10002: 'Email not valid, please use another email',
  10003: 'Error when upload file',
};
