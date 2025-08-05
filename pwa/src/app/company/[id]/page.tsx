import { CompanyPublicProfilePage } from '@/components/company-client-profile';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function Page({ params }: { params: { id: string } }) {
  return <CompanyPublicProfilePage params={params} />;
}
