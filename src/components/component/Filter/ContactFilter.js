import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Contact-Slice';
import { StyledInput } from './Input.styled';

export const ContactFilter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value.trim().toLowerCase();

    dispatch(setFilter(value));
  };

  return (
    <>
      <StyledInput
        type="text"
        name="filter"
        placeholder="FILTER CONTACTS"
        autoComplete="off"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};
