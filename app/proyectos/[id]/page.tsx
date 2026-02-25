import { Metadata } from 'next';
import { PROJECTS, getProjectById } from '@/lib/data';
import ProjectDetailClient from './ProjectDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado | DSN Empresas',
    };
  }

  const isAeropuerto = project.title.toLowerCase().includes('aeropuerto');
  
  let title = `${project.title} | DSN Empresas`;
  let description = `${project.description} DSN Empresas - Empresa de ingeniería y software de alta disponibilidad en Concordia, Entre Ríos.`;
  let keywords = [
    project.title,
    'DSN Empresas',
    'proyecto Concordia',
    'infraestructura Concordia',
  ];

  if (isAeropuerto) {
    title = `DSN Empresas - ${project.title} | Aeropuerto Concordia`;
    description = `${project.title} - ${project.description} DSN Empresas realizó este proyecto de infraestructura crítica en el Aeropuerto de Concordia, Entre Ríos. Empresa líder en ingeniería aeroportuaria.`;
    keywords = [
      'aeropuerto concordia',
      'DSN Empresas aeropuerto concordia',
      'balizamiento aeropuerto',
      'infraestructura aeroportuaria concordia',
      'ingeniería aeroportuaria Argentina',
      project.title,
    ];
  }

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  return <ProjectDetailClient id={id} />;
}
