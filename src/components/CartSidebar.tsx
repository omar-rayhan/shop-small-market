
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartSidebarProps) => {
  const { toast } = useToast();
  const [showCheckout, setShowCheckout] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
  };

  const handleOrderComplete = () => {
    // Clear cart after successful checkout
    cartItems.forEach(item => onRemoveItem(item.id));
    setShowCheckout(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-4xl bg-white shadow-xl z-50 transform transition-transform animate-slide-in-right overflow-y-auto">
        {showCheckout ? (
          <CheckoutForm 
            cartItems={cartItems}
            onBack={handleBackToCart}
            onOrderComplete={handleOrderComplete}
          />
        ) : (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <Badge variant="secondary">{totalItems}</Badge>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <Button onClick={onClose} className="mt-4">
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Professional Checkout Footer */}
            {cartItems.length > 0 && (
              <div className="border-t bg-gray-50/50 p-6">
                <div className="space-y-6">
                  {/* Order Summary */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-gray-700">
                        <span className="text-sm font-medium">Subtotal ({totalItems} items):</span>
                        <span className="text-sm font-semibold text-gray-900">${total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-700">
                        <span className="text-sm font-medium">Shipping:</span>
                        <span className="text-sm font-medium text-green-600">Free</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-700">
                        <span className="text-sm font-medium">Tax (8%):</span>
                        <span className="text-sm font-semibold text-gray-900">${(total * 0.08).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  {/* Total */}
                  <div className="flex justify-between items-center py-2 bg-white rounded-lg px-4 border">
                    <span className="text-lg font-bold text-gray-900">Total:</span>
                    <span className="text-xl font-bold text-gray-900">${(total * 1.08).toFixed(2)}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    <Button 
                      className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 text-base" 
                      size="lg"
                      onClick={handleCheckoutClick}
                    >
                      Proceed to Checkout
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2" 
                      onClick={onClose}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
