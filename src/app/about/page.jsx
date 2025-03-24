import Head from 'next/head';
import Image from 'next/image';

export const revalidate = 3600; // Revalidate every hour (ISR)

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Our Store</title>
        <meta name="description" content="Learn more about our company" />
      </Head>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            YallaShop
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We started with a simple idea: to provide high-quality products at affordable prices.
            </p>
          </div>

          <div className="mt-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <Image
                  src="/about-image.jpg"
                  alt="Our team"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 lg:mt-0">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Our Mission
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  To deliver exceptional value to our customers through carefully curated products,
                  outstanding service, and a seamless shopping experience.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="/products"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}