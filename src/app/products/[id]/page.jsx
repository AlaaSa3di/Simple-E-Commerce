import Head from 'next/head';
import Image from 'next/image';
import { fetchProductById, fetchAllProducts } from '@/app/lib/api';
import AddToCartButton from '@/app/client/AddToCartButton';

export async function generateStaticParams() {
  const products = await fetchAllProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }) {
  const id = params?.id;
  
  if (!id) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading product details...</div>
      </div>
    );
  }

  const product = await fetchProductById(id);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Product not found</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.title} | Our Store</title>
        <meta name="description" content={product.description} />
      </Head>
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* صورة المنتج */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* تفاصيل المنتج */}
            <div className="mt-10 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.title}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">{product.price}</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6 text-base text-gray-700">
                  <p>{product.description}</p>
                </div>
              </div>

              {/* زر إضافة إلى السلة */}
              <div className="mt-6">
                <div className="mt-10 flex">
                  <AddToCartButton product={product} />
                </div>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                <div className="mt-4 prose prose-sm text-gray-500">
                  <ul className="list-disc pl-5">
                    <li>Brand: {product.brand}</li>
                    <li>Category: {product.category}</li>
                    <li>Weight: {product.weight}</li>
                    <li>Expiry: {product.expiry}</li>
                    <li>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}