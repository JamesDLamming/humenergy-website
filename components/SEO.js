import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({
  title = 'Welcome to Hum Energy',
  image = '/HumEnergyLogoSquare.svg',
  url = 'www.humenergyapp.com',
  description = 'Welcome to Hum Energy',
  favicon = '/HumEnergyLogoSquare.svg',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href={favicon || '/favicon.ico'} />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  favicon: PropTypes.string,
};

export default SEO;
