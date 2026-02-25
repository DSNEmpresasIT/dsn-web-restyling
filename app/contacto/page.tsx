import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contacto | DSN Empresas - Reunión Técnica',
  description: 'Coordinemos una reunión técnica. Contanos qué necesitás y coordinamos el mejor momento para hablar.',
};

export default function ContactPage() {
  return <ContactClient />;
}
