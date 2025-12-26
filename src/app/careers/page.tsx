import { generateMetadata, generateBreadcrumbStructuredData } from '@/utils/seo';
import { COMPANY } from '@/utils/constants';
import CareersClient from './CareersClient';

export const metadata = generateMetadata({
  title: 'Careers',
  description: `Join the ${COMPANY.brandName} team. We're looking for talented developers, designers, and technology professionals to help us build the future.`,
  path: '/careers',
  keywords: [
    'careers',
    'jobs',
    'employment',
    'software developer jobs',
    'IT careers',
    'tech jobs',
    'software engineering jobs',
    'remote jobs',
  ],
});

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CareersClient />
    </>
  );
}

