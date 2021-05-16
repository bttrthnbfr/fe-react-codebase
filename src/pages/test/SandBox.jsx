import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from '../../client/rest/apis';
import { getTextFromErr } from '../../utils/errors';

export default () => {
  const {
    isLoading, data, isError, error,
  } = useQuery('user', getUser, {
    retry: 0,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <p>
        error:
        {' '}
        {JSON.stringify(getTextFromErr(error))}
      </p>
    );
  }

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};
