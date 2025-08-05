import React from 'react';
import { notFound } from 'next/navigation';
import { getJobById } from '@/services/jobService';
import { JobDetailClient } from '@/components/job-detail-client';
import type { Job } from '@prisma/client';

// Static params for static export
export async function generateStaticParams() {
  // Puedes reemplazar esto con una consulta real si tienes acceso a los datos:
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJobById(params.id);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
