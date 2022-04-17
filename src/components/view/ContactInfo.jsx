import { useParams } from 'react-router-dom';

export const ContactInfo = () => {
  const contactId = useParams();

  return <div>ContactInfo {contactId}</div>;
};
