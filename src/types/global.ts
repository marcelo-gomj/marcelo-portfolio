type ContactsList = 'instagram' | 'email' | 'github';

export type ContactsContextProps = { 
  [contacts in ContactsList] : string 
};

