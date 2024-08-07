import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Btn from "components/Btn/Btn";
import style from "./ContactForm.module.css";

const formFields = [
  {
    name: "name",
    label: "Name",
    rules: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  },
  {
    name: "number",
    label: "Number",
    rules: Yup.string()
      .trim()
      .matches(/^[0-9+-]+$/, "Only numbers and symbols + and - are allowed")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  },
];

const initialValues = formFields.reduce(
  (acc, field) => ({ ...acc, [field.name]: "" }),
  {}
);

const validationSchema = Yup.object().shape(
  formFields.reduce(
    (schema, { name, rules }) => ({ ...schema, [name]: rules }),
    {}
  )
);

const ContactForm = ({ onSubmit }) => {
  const formSchema = formFields.map((field) => ({
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
      <Form className={style.form}>
        {formSchema.map(({ name, label, id }) => (
          <div className={style.fromControl} key={name}>
            <label className={style.fromLabel} htmlFor={id}>
              {label}
            </label>
            <Field
              id={id}
              className={style.formInput}
              type="text"
              name={name}
            />
            <ErrorMessage
              className={style.errorMsg}
              name={name}
              component="span"
            />
          </div>
        ))}

        <Btn type="submit" size="md">
          Add contact
        </Btn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
