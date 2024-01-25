import * as yup from 'yup';

export const checkInValidationSchemas = yup.object().shape({
    name: yup
        .string()
        .required(),
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