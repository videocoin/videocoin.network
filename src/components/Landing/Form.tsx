import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'gatsby';
import Button from 'components/UI/Button';
import * as S from './styles';

const Form = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      fields: {
        'Email Address': email,
      },
    };
    const res = await fetch(
      `https://api.airtable.com/v0/appZEHLbaOQroP2IL/Sign%20Up%20Data`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer key8sx9cmjGY25sJH',
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      setSuccess(true);
    }
    setLoading(false);
  };
  return (
    <S.Form>
      <a
        href="https://medium.com/p/ba75c30010e3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button btnTheme="secondary">Learn More</Button>
      </a>
      {isSuccess ? (
        <S.SuccessForm>Success</S.SuccessForm>
      ) : (
        <form noValidate onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
          />
          <Button type="button" disabled={isLoading}>
            Stay Informed
          </Button>
        </form>
      )}
    </S.Form>
  );
};

export default Form;
