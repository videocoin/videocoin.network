const BASE_URL = process.env.GATSBY_API_URL;

export const validateUser = async (data: Record<string, string>) => {
  const res = await fetch(`${BASE_URL}/users/validate`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};
