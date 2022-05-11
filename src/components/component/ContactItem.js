import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';

import toast from 'react-hot-toast';

import { useDeleteContactMutation } from 'redux/ContactsAPI';

export const ContactItem = ({ contact, isFetching }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { name, surname, phone, email, id } = contact;

  return (
    <li style={{ marginBottom: '10px', cursor: 'pointer' }}>
      <Paper
        className="list-item"
        sx={{
          maxWidth: 275,
          backgroundColor: 'rgb(102, 178, 255)',
          color: 'white',
        }}
        elevation={4}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {name} {surname}
          </Typography>
          <Typography
            sx={{ fontSize: 14, color: '#0A1929' }}
            color="text.secondary"
            gutterBottom
          >
            tel:{' '}
            <a
              style={{ color: '#0A1929', textDecoration: 'none' }}
              href={`tel:${phone}`}
            >
              {phone}
            </a>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {' '}
            <a
              style={{ color: '#0A1929', textDecoration: 'none' }}
              href={`mailto:${email}`}
            >
              {' '}
              email: {email}
            </a>
          </Typography>
          <IconButton onClick={() => toast.error("This didn't work yet")}>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              deleteContact(id);

              toast.success('Contact was deleted');
            }}
            aria-label="delete"
          >
            {isLoading ? <SaveIcon /> : <DeleteIcon />}
          </IconButton>
        </CardContent>
      </Paper>
    </li>
  );
};
