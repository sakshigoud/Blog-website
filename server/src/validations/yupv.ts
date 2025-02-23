import * as yup from 'yup';

export const postCreateSchema = yup.object({
    title: yup.string().required('Title is required'),
    content: yup.string().required('Content is required'),
    author: yup.string().required('Author is required'),
    createdDate: yup.date(),
});

export const postUpdateSchema = yup.object({
    title: yup.string(),
    content: yup.string(),
    author: yup.string(),
});

