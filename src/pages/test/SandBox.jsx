import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from '../../client/rest/apis';
import { getTextFromErr } from '../../utils/errors';

const defaultErrorComponent = (error, refetch) => (
  <>
    <p>
      error:
      {' '}
      {getTextFromErr(error)}
    </p>
    <button onClick={refetch} type="button">retry</button>
  </>
);

const useComponentQuery = (query, component) => {
  const {
    isLoading, data, isError, error,
    refetch,
  } = query;

  if (isLoading) {
    return component.loading();
  }

  if (isError) {
    if (!component.error === undefined) {
      return component.error(error);
    }
    return defaultErrorComponent(error, refetch);
  }

  return component.main(data);
};

export default () => useComponentQuery(useQuery('user', getUser, {
  retry: 0,
}), {
  loading: () => <p>Loading</p>,
  main: (data) => <p>{JSON.stringify(data)}</p>,
});
