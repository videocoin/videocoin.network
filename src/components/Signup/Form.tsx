import React, { ReactNode, useState } from 'react';
import { Formik } from 'formik';
import { Button, Typography } from 'ui-kit';
import { Link } from 'gatsby';
import { FormWrapper, SForm, Right } from './styles';
import { signUpEmailSchema, countrySchema, addressSchema } from './validation';
import Checkbox from './Checkbox';
import Input from './Input';
import Select from './Select';
import countries from './countries';
import { validateUser } from 'components/Signup/api';

const EmailForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const initialValues = {
    email: '',
    password: '',
    confirm_password: '',
    agree: false,
  };
  const handleSubmit = async (values: any) => {
    const { agree, ...data } = values;
    const res = await validateUser(data);
    console.log(res);
    onSubmit();
    console.log('submit');
  };
  return (
    <>
      <Typography align="center" theme="white" type="subtitle">
        VideoCoin Network Account
      </Typography>
      <FormWrapper>
        <Formik
          validationSchema={signUpEmailSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {() => (
            <SForm>
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <Input
                name="confirm_password"
                label="Confirm Password"
                type="password"
              />
              <Checkbox checked={false} name="agree">
                <Typography>
                  I agree to the <Link to="/privacy">Privacy Policy</Link>
                  &nbsp;and&nbsp;
                  <Link to="/terms">Terms and Conditions</Link>
                </Typography>
              </Checkbox>
              <Button block theme="perfect-white" type="submit">
                Next
              </Button>
            </SForm>
          )}
        </Formik>
      </FormWrapper>
    </>
  );
};

const CountryForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const initialValues = {
    first_name: '',
    last_name: '',
    country: '',
  };
  return (
    <>
      <Typography align="center" theme="white" type="subtitle">
        Additional Information (2/3)
      </Typography>
      <FormWrapper>
        <Formik
          validationSchema={countrySchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {() => (
            <SForm>
              <Select name="country" options={countries} />
              <Input name="first_name" label="First Name" />
              <Input name="last_name" label="Last Name" />
              <Button block theme="perfect-white" type="submit">
                Next
              </Button>
            </SForm>
          )}
        </Formik>
      </FormWrapper>
    </>
  );
};
const AddressForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const initialValues = {
    address_1: '',
    address_2: '',
    city: '',
    region: '',
    zip: '',
  };
  return (
    <>
      <Typography align="center" theme="white" type="subtitle">
        Additional Information (3/3)
      </Typography>
      <FormWrapper>
        <Formik
          validationSchema={addressSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
          validateOnBlur={false}
        >
          {() => (
            <SForm>
              <Input name="address_1" label="Street Address" />
              <Input name="address_2" label="Apt, Suite, Etc" />
              <Input name="city" label="City" />
              <Input name="region" label="State/province" />
              <Input name="zip" label="Postal Code" />
              <Button block theme="perfect-white" type="submit">
                Create Account
              </Button>
            </SForm>
          )}
        </Formik>
      </FormWrapper>
    </>
  );
};

const AdditionalInfoForm = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const handleSubmitCountryForm = (values: any) => {
    setFormData({ ...formData, ...values });
    setStep(2);
  };
  const handleSubmitAddressForm = (values: any) => {};

  const forms: Record<number, ReactNode> = {
    1: <CountryForm onSubmit={handleSubmitCountryForm} />,
    2: <AddressForm onSubmit={handleSubmitAddressForm} />,
  };
  return <>{forms[step]}</>;
};

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const forms: Record<number, ReactNode> = {
    1: <EmailForm onSubmit={() => setStep(2)} />,
    2: <AdditionalInfoForm />,
  };
  return (
    <Right>
      {forms[step]}
      <Typography align="center" type="bodyThin">
        Already have an account? <a href="#">Login</a>
      </Typography>
    </Right>
  );
};

export default SignupForm;
