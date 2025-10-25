import React from 'react';
import { Link } from 'react-router-dom';
import { useGift } from '../context/GiftContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal, getCartItemCount } = useGift();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any gifts to your cart yet.
          </p>
          <div className="space-x-4">
            <Link to="/quiz" className="btn-primary">
              Find Gifts
            </Link>
            <Link to="/" className="btn-outline">
              Browse All
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shopping Cart ({getCartItemCount()} items)
          </h1>
          <p className="text-gray-600">
            Review your selected gifts before checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div key={item._id} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-semibold text-primary-600">
                            ${item.price}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Qty:</span>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                className="px-2 py-1 text-gray-600 hover:text-gray-800"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 border-x border-gray-300 text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                className="px-2 py-1 text-gray-600 hover:text-gray-800"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Remove Button */}
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="text-red-600 hover:text-red-700 p-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({getCartItemCount()} items)</span>
                  <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary-600">
                      ${(getCartTotal() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full btn-primary text-center">
                  Proceed to Checkout
                </button>
                <Link
                  to="/quiz"
                  className="w-full btn-outline text-center block"
                >
                  Find More Gifts
                </Link>
              </div>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
