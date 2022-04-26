import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Contact-Slice';

export const ContactFilter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value.trim().toLowerCase();

    dispatch(setFilter(value));
  };

  return (
    <div>
      <input
        type="text"
        name="filter"
        placeholder="FILTER CONTACTS"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
