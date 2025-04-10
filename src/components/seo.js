import Head from "next/head";

const Seo = ({
    title = "Gamma Scientific Instruments",
    description = "Leading supplier of scientific, laboratory, and testing equipment in the UK.",
    canonical = "https://www.yourdomain.com",
    image = "https://www.yourdomain.com/assets/imgs/logo.png",
    keywords = "scientific equipment, laboratory instruments, material testing, UK supplier",
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonical} />

            {/* Open Graph for Facebook/LinkedIn */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content="Gamma Scientific" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
};

export default Seo;
