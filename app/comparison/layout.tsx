import ComparisonLayout from '@/components/layouts/ComparisonLayout'

export const metadata = {
  title: 'Balenciaga | Порівняння товарів',
}

export default function ComparisonRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ComparisonLayout>{children}</ComparisonLayout>
}
