import { StyledInput } from './Input.styled';

export const ContactFilter = ({ setFilterValue, filterValue }) => {
  const handleChange = e =>
    setFilterValue(e?.target?.value.trim().toLowerCase());

  return (
    <>
      <StyledInput
        type="text"
        name="filter"
        placeholder="FILTER CONTACTS"
        autoComplete="off"
        value={filterValue}
        onChange={handleChange}
      />
    </>
  );
};
