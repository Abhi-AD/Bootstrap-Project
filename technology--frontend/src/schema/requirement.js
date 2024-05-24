import * as yup from 'yup';

export const MOBILE_NUMBER_PATTERN = /^[0-9]{10}$/;

export const visitCardSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  post: yup.string().required('Designation is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(MOBILE_NUMBER_PATTERN, 'Phone number  10 digits')
    .required('Phone number is required'),
  website: yup.string().url('Invalid URL').required('Website URL is required'),
  address_line_1: yup.string().required('Permanent address'),
  address_line_2: yup.string(),
});


export const ContactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(MOBILE_NUMBER_PATTERN, 'Phone number  10 digits')
    .required('Phone number is required'),
    message: yup.string().required('Please input the your description'),
    workRadio: yup.string().required('Please input the any button click'),
    service: yup.array().required('Check the Service'),
});


export const JobApplicationSchema = yup.object().shape({
  full_name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone_number: yup
    .string()
    .matches(MOBILE_NUMBER_PATTERN, 'Phone number  10 digits')
    .required('Phone number is required'),
  relocate_to_pune: yup.boolean().required("Option findout"),
  additional_question: yup.string().required('Please input the your description'),
  cv_or_resume: yup.string().required("Please Input the CV or Resume"),
  photo: yup.string().required("Please Input the Photo"),
  cover_letter: yup.string().required("Please Input the Cover Letter"),

});
