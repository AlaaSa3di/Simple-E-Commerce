'use client';

export default function AddToCartButton({ product }) {
  const handleAddToCart = () => {
    // In a real app, you would add to cart state or send to API
    alert(`Added ${product.title} to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
    >
      Add to cart
    </button>
  );
}