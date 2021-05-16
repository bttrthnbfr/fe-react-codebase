import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { createUser, getUser } from '../../client/rest/apis';
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

const useComponentMutation = (mutation, component) => {
  if (mutation.isLoading) {
    return component.loading();
  }

  if (mutation.isError) {
    if (!component.error === undefined) {
      return component.error(mutation.error);
    }
    // return defaultErrorComponent(mutation.error, () => {});
    return (
      <p>
        error:
        {' '}
        {getTextFromErr(mutation.error)}
      </p>
    );
  }

  return component.main(mutation.data, mutation.mutate);
};

export default () => (
  <>
    <p>Example using useComponentQuery: </p>
    {useComponentQuery(useQuery('user', getUser, {
      retry: 0,
    }), {
      loading: () => <p>Loading</p>,
      main: (data) => <p>{JSON.stringify(data)}</p>,
    })}
    <br />

    <p>Example using useComponentMutation</p>
    {useComponentMutation(useMutation('user-mutation', () => createUser('hafizjoundys@gmail.com')), { // example using mutation
      loading: () => <p>create user ..</p>,
      main: (data, mutate) => (
        <>
          <p>{JSON.stringify(data)}</p>
          <button onClick={mutate} type="button">Create User</button>
        </>
      ),
    })}
  </>
);
