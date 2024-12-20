import Link from 'next/link';
import './globals.css';
import { Links } from '@/types/Links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Products shop',
    template: '%s | Products shop',
  },
  description:
    'This is a page for showcasing a product. author: Patryk Buczkowski',
  // author: 'Patryk Buczkowski',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const links: Links = {
    start: '/',
    'Blog-Main': '/blog',
    'Blog-first': '/blog/first',
    'Blog-second': '/blog/second',
    Docs: '/docs',
    Action: '/action',
    home: '/home',
    About: '/about',
    Contact: '/contact',
    Products: '/products',
    'Products [] reviews []': '/products/0/reviews/00',
    'Order Product': "order-product"
  };

  return (
    <html lang="en">
      <body className="min-h-full">
        <header className="max-h-fit mb-2 top-0 left-0 w-full bg-blue-800 p-1 z-10">
          <nav className="flex ml-1 gap-1 bg-blue-600 rounded">
            {Object.entries(links).map(([key, value], index, arr) => (
              <Link key={key} href={value} className="text-green-500">
                {key}
                {index < arr.length - 1 && ' |'}
              </Link>
            ))}
          </nav>
        </header>

        <main className="p-4">{children}</main>

        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
          <p className="text-center">© 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}
