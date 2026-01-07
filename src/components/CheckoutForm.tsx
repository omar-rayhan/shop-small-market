
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, CreditCard, Truck, Loader2, Lock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CheckoutFormProps {
  cartItems: CartItem[];
  onBack: () => void;
  onOrderComplete: () => void;
}

const CheckoutForm = ({ cartItems, onBack, onOrderComplete }: CheckoutFormProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.08;
  const shipping = 0;
  const finalTotal = total + tax + shipping;

  const handleStripeCheckout = async () => {
    if (!customerEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      toast({
        title: "Redirecting to Payment...",
        description: "Please wait while we connect you to our secure payment page.",
      });

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          cartItems,
          customerEmail,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Button>
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
                placeholder="john@example.com"
              />
              <p className="text-xs text-muted-foreground mt-1">
                You'll receive order confirmation and updates at this email.
              </p>
            </div>
          </div>

          <Separator />

          {/* Secure Checkout Notice */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold">Secure Checkout with Stripe</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Your payment is processed securely by Stripe. You'll be redirected to enter your:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" /> Card details
              </li>
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4" /> Shipping address
              </li>
            </ul>
          </div>

          <Button 
            onClick={handleStripeCheckout}
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 text-base"
            size="lg"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Pay ${finalTotal.toFixed(2)} Securely
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By proceeding, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-6 lg:self-start">
          <div className="bg-muted/30 rounded-lg p-6 border">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping:</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (8%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-green-800 dark:text-green-200">
                <strong>🎉 Free shipping</strong> on all orders!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
