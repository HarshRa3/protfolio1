import ContactCon from '@/components/contact/ContactCon';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Harsh Rastogi-Contact",
  description: "A Portfolio Contact Page With better design",
};
const page:React.FC = () => {
  return (
    <ContactCon/>
  );
};

export default page;
