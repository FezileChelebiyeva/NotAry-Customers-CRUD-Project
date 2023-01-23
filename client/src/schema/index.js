import * as yup from "yup";

export const customersSchema = yup.object().shape({
  image: yup
    .string()
    .required("pleace write image url")
    .url("this input must be url!"),
  name: yup.string().required("pleace write name"),
  department: yup.string().required("pleace write department"),
  description: yup
    .string()
    .required("pleace write description")
    .min(50, "description must be min 50 characters!"),
});
