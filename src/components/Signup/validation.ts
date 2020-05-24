import * as Yup from 'yup';

export const signUpEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid')
    .required('Email is left empty'),
  password: Yup.string().required('Password is left empty'),
  confirm_password: Yup.string()
    .required('Confirm Password is left empty')
    .oneOf([Yup.ref('password')], 'Password and Confirm Password do not match'),
  agree: Yup.boolean().oneOf([true]),
});

export const countrySchema = Yup.object().shape({
  country: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.string(),
    })
    .required(),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
});
export const addressSchema = Yup.object().shape({
  address_1: Yup.string().required(),
  address_2: Yup.string().required(),
  region: Yup.string().required(),
  city: Yup.string().required(),
  zip: Yup.string().required(),
});
