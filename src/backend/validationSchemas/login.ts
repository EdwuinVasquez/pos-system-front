import * as yup from 'yup';

export const loginValidationSchemas = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(5, 'Too short!')
        .max(30)
        .required(),
})