const BASE_URL = process.env.GATSBY_API_URL;

export const validateUser = async (data: any) => {
  const res = await fetch(`${BASE_URL}/users/validate`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (res.ok) {
    return json;
  }
  throw json;
};

export const createUser = async (data: any) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (res.ok) {
    return json;
  }
  throw json;
};
