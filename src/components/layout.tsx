import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';

export const siteTitle = `Santa's Workshop`;

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
        <title>{siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="christmas, giving" />
        <meta name="author" content="Mukul Agarwal, Akshat Agarwal" />
        <meta name="copyright" content="Mukul Agarwal, Akshat Agarwal" />
        <meta
          name="description"
          content="Give back to your community by donating toys."
        />
      </Head>
      <Header title={title} />
      <script type="text/javascript" src="/js/jquery.min.js" />
      <script type="text/javascript" src="/js/popper.min.js" />
      <script type="text/javascript" src="/js/bootstrap.min.js" />
      <div className="container">{children}</div>
    </div>
  );
}
