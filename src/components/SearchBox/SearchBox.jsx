import InputField from "components/InputField/InputField";
import { FormikProvider, Field, useFormik } from "formik";
import { useEffect } from "react";

const SearchBox = ({ value, label = "Find contacts by name", onChange }) => {
  const formik = useFormik({ initialValues: { search: value } });
  const { values } = formik;

  useEffect(() => {
    onChange(values?.["search"]);
  }, [values]);

  return (
    <FormikProvider value={formik}>
      <Field name="search" type="text" label={label} component={InputField} />
    </FormikProvider>
  );
};

// const SearchBoxSimple = ({
//   value,
//   label = "Find contacts by name",
//   onChange,
// }) => (
//   <label>
//     {label}
//     <input value={value} onChange={onChange} />
//   </label>
// );

export default SearchBox;
