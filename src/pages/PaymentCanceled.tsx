import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PaymentCanceled = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-12 pb-8 text-center">
            <div className="mb-6">
              <XCircle className="h-20 w-20 text-red-500 mx-auto" />
            </div>
            
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Payment Canceled
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Your payment was canceled. Don't worry, no charges were made.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground">
                Your cart items are still saved. You can complete your purchase whenever you're ready.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Shop
                </Link>
              </Button>
              <Button asChild>
                <Link to="/">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  View Cart
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentCanceled;
