import './component.css';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

export const ModalButton = ({ modal, setModal }) => {
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Button onClick={handleModal} size="large">
        <span>{modal ? <CloseIcon /> : <AddCircleIcon />}</span>
      </Button>
    </>
  );
};
