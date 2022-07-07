import moment from 'moment';

import {
  User,
  Feedback,
} from '../types';

export async function wget(
  input: RequestInfo,
  init?: RequestInit | undefined,
  timeout = 5000
): Promise<Response> {
  return Promise.race([
    fetch(input, init),
    new Promise<Response>((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout)),
  ]);
}

export const getUsers = async (): Promise<User[]> => {
  const result = await wget(`https://api.teoriquizen.no/v1/quizhistory/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'key cb778b43-a403-45d5-a467-950af9c08415',
    },
  });

  if (result.ok) {
    const json = await result.json();
    return json;
  } else {
    throw Error('Unable to post data');
  }
};

export const createUser = async (data: User | object): Promise<User> => {
  const result = await wget(`https://api.teoriquizen.no/v1/quizhistory/username`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'key cb778b43-a403-45d5-a467-950af9c08415',
    },
    body: JSON.stringify(data),
  });

  if (result.ok) {
    const json = await result.json();
    return json;
  } else {
    throw Error('Unable to post data');
  }
};

export const postFeedback = async (data: Feedback): Promise<void> => {
  const result = await wget(`https://api.teoriquizen.no/v1/quizhistory/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'key cb778b43-a403-45d5-a467-950af9c08415',
    },
    body: JSON.stringify(data),
  });

  if (result.ok) {
    // const json = await result.json();
    // return json;
  } else {
    throw Error('Unable to post data');
  }
};

export const setUsername = async (data: User | any, username: string): Promise<User> => {
  const result = await wget(`https://api.teoriquizen.no/v1/quizhistory/username/${data.uniqId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'key cb778b43-a403-45d5-a467-950af9c08415',
    },
    body: JSON.stringify({
      ...data,
      username,
    }),
  });

  if (result.ok) {
    const json = await result.json();
    return json;
  } else {
    throw Error('Unable to post data');
  }
};
export const getUser = async (data: User): Promise<User> => {
  const result = await wget(`https://api.teoriquizen.no/v1/quizhistory/username/${data.uniqId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'key cb778b43-a403-45d5-a467-950af9c08415',
    },
  });

  if (result.ok) {
    const json = await result.json();
    return json;
  } else {
    throw Error('Unable to post data');
  }
};



