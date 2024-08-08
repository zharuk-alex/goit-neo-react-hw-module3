import InputField from "components/InputField/InputField";

const SearchBox = ({ value, label = "Find contacts by name", onChange }) => {
  return (
    <InputField
      name="search"
      type="text"
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
