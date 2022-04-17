import { CreateContactForm, ContactsList } from 'components/component/index';

//  When is log in in h2 add user name
export const HomeView = () => {
  return (
    <div>
      <h2>Phone book</h2>
      <CreateContactForm />
      <ContactsList />
    </div>
  );
};
