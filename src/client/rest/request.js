import errors from '../../errors';
import { throwInternalError } from '../../utils/errors';

const isNetworkError = (err) => {
  if (err.message === 'Network Error') {
    return true;
  }

  return false;
};

const parseAxiosError = (err) => {
  console.log(err); // TODO add debug mode
  console.log(err.response);

  if (isNetworkError(err)) {
    throwInternalError(errors.NETWORK_ERROR());
  }

  const { data, status } = err.response;

  throwInternalError({
    code: data.errorCode,
    message: data.message,
    details: data.details,
    HTTPStatus: status,
  });
};

// eslint-disable-next-line import/prefer-default-export
export const createAxiosRequest = async (request) => {
  let result;
  try {
    result = await request;
  } catch (err) {
    parseAxiosError(err);
  }
  return result.data;
};
