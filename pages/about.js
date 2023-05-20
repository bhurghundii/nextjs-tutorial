// How Status Codes matter: https://nextjs.org/learn/seo/crawling-and-indexing/status-codes
export async function getStaticProps(context) {
    return {
      redirect: {
        destination: '/',
        permanent: true, // triggers 308
      },
    };
  }