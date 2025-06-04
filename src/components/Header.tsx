
import { useState } from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';
import ThemeToggle from './ThemeToggle';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface HeaderProps {
  onCartClick: () => void;
  cartItems: CartItem[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({ onCartClick, cartItems, searchQuery, onSearchChange }: HeaderProps) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);
  const { toast } = useToast();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogin = (email: string, password: string) => {
    // Simulate login
    setUser({ email, name: email.split('@')[0] });
    toast({
      title: "Welcome back!",
      description: "You have successfully signed in."
    });
  };

  const handleLogout = () => {
    setUser(null);
    toast({
      title: "Signed out",
      description: "You have been successfully signed out."
    });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">ShopHub</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              {user ? (
                <UserMenu user={user} onLogout={handleLogout} />
              ) : (
                <Button onClick={() => setAuthModalOpen(true)}>
                  Sign In
                </Button>
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={onCartClick}
                className="relative"
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;
