import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import InputField from "components/InputField/InputField";
import Btn from "components/Btn/Btn";
import styles from "./ContactForm.module.css";

const formFields = [
  {
    name: "name",
    label: "Name",
    value: "",
    rules: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    "data-test": "ok",
  },
  {
    name: "number",
    label: "Number",
    value: "",
    rules: Yup.string()
      .trim()
      .matches(/^[0-9+-]+$/, "Only numbers and symbols + and - are allowed")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  },
  // {
  //   name: "email",
  //   label: "Email",
  //   value: "@",
  //   type: "email",
  //   "data-attr": "someval",
  //   rules: Yup.string()
  //     .trim()
  //     .min(3, "Too short!")
  //     .max(50, "Too long!")
  //     .required("Required"),
  // },
];

const validationSchema = Yup.object().shape(
  formFields.reduce(
    (schema, { name, rules }) => ({ ...schema, [name]: rules }),
    {}
  )
);

const ContactForm = ({ onSubmit }) => {
  const initialValues = formFields.reduce(
    (fields, field) => ({ ...fields, [field.name]: field.value }),
    {}
  );

  const formSchema = formFields.map(({ value, rules, ...field }) => ({
    ...field,
    id: useId(),
  }));

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        {formSchema.map((field) => (
          <Field key={field.id} component={InputField} {...field} />
        ))}
        <Btn type="submit" size="md">
          Add contact
        </Btn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
