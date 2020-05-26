import React, { ReactNode, useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Button, Typography } from 'ui-kit';
import { Link } from 'gatsby';
import { FormWrapper, SForm, Right } from './styles';
import { signUpEmailSchema, countrySchema, addressSchema } from './validation';
import Checkbox from './Checkbox';
import Input from './Input';
import Select from './Select';
import countries from './countries';
import { createUser, validateUser } from 'components/Signup/api';
import { globalHistory as history } from '@reach/router';

const initialValues = {
  email: '',
  password: '',
  confirm_password: '',
  agree: false,
};

const EmailForm = ({
  onSubmit,
}: {
  onSubmit: (values: typeof initialValues) => void;
}) => {
  const handleSubmit = async (
    values: typeof initialValues,
    helpers: FormikHelpers<typeof initialValues>
  ) => {
    const { agree, ...data } = values;
    const { setFieldError } = helpers;
    try {
      await validateUser(data);
      onSubmit(values);
    } catch (e) {
      if (e.fields) {
        Object.keys(e.fields).forEach((field: string) => {
          setFieldError(field, e.fields[field]);
        });
      }
    }
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
                  I agree to the{' '}
                  <a href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkWebsiteTermsofUse.html">
                    Privacy Policy
                  </a>
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
const AddressForm = ({ onSubmit }: { onSubmit: any }) => {
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

const AdditionalInfoForm = ({
  emailForm,
}: {
  emailForm: typeof initialValues;
}) => {
  const [formData, setFormData] = useState<any>({});
  const [step, setStep] = useState(1);

  const handleSubmitCountryForm = (values: any) => {
    setFormData({ ...formData, ...values });
    setStep(2);
  };
  const handleSubmitAddressForm = async (
    values: any,
    helpers: FormikHelpers<any>
  ) => {
    const { location } = history;
    const urlParams = new URLSearchParams(location.search);
    const role = urlParams.get('role');
    const isMiner = role === 'miner';
    const data = {
      ...emailForm,
      ...formData,
      country: formData.country.value,
      ...values,
      ui_role: isMiner ? 'USER_ROLE_UI_MINER' : 'USER_ROLE_UI_PUBLISHED',
    };
    try {
      await createUser(data);
    } catch (e) {
      if (e.fields) {
        Object.keys(e.fields).forEach((field: string) => {
          helpers.setFieldError(field, e.fields[field]);
        });
      }
    }
  };

  const forms: Record<number, ReactNode> = {
    1: <CountryForm onSubmit={handleSubmitCountryForm} />,
    2: <AddressForm onSubmit={handleSubmitAddressForm} />,
  };
  return <>{forms[step]}</>;
};

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<typeof initialValues>({});
  const handleValidate = (values: any) => {
    setFormData(values);
    setStep(2);
  };
  const forms: Record<number, ReactNode> = {
    1: <EmailForm onSubmit={handleValidate} />,
    2: <AdditionalInfoForm emailForm={formData} />,
  };
  return (
    <Right>
      {forms[step]}
      <Typography align="center" type="bodyThin">
        Already have an account?{' '}
        <a href="https://console.videocoin.network/sign-in">Login</a>
      </Typography>
    </Right>
  );
};

export default SignupForm;
