import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './header';

export const siteTitle = `Give a Gift!`;

export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {title ? <title>{title}</title> : <title>{siteTitle}</title>}
        <meta charSet="utf-8" />
        <meta name="keywords" content="christmas, giving" />
        <meta name="author" content="Mukul Agarwal, Akshat Agarwal" />
        <meta name="copyright" content="Mukul Agarwal, Akshat Agarwal" />
        <meta
          name="description"
          content="Give back to your community by donating toys."
        />
      </Head>
      <Header />
      <Container>{children}</Container>
    </div>
  );
}
