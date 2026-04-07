import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Package, Settings, LogIn, UserPlus, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

const Account = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  // Auth Forms
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // DB Data State
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
  });
  const [orders, setOrders] = useState<any[]>([]);

  // Loading States for updates
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({ new: '', confirm: '' });

  // 1. Session & Data Fetching
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) fetchUserData(session.user.id);
      setIsCheckingSession(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user) fetchUserData(session.user.id);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserData = async (userId: string) => {
    // Fetch Profile info (phone, address, etc.)
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (profile) {
      setProfileData({
        firstName: profile.first_name || '',
        lastName: profile.last_name || '',
        phone: profile.phone || '',
        address: profile.address || '',
      });
    }

    // Fetch Orders & Order Items
    const { data: ordersData } = await supabase
      .from('orders')
      .select('*, order_items(*)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (ordersData) {
      setOrders(ordersData);
    }
  };

  // 2. Authentication Handlers
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) throw error;
      toast.success('Welcome back!');
      navigate('/'); // Redirect to Home
    } catch (error: any) {
      toast.error(error.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: registerData.email,
        password: registerData.password,
        options: {
          data: {
            first_name: registerData.firstName,
            last_name: registerData.lastName,
          }
        }
      });

      if (error) throw error;
      toast.success('Welcome to Cosmo Beds!');
      navigate('/shop'); // Redirect to Shop
    } catch (error: any) {
      toast.error(error.message || 'Failed to register');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error: any) {
      toast.error('Error logging out');
    }
  };

  // 3. Database Update Handlers
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdatingProfile(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: profileData.firstName,
          last_name: profileData.lastName,
          phone: profileData.phone,
          address: profileData.address,
        })
        .eq('id', session.user.id);

      if (error) throw error;

      // Also update auth metadata so the greeting updates instantly
      await supabase.auth.updateUser({
        data: { first_name: profileData.firstName, last_name: profileData.lastName }
      });

      toast.success('Profile updated successfully!');
    } catch (error: any) {
      toast.error('Failed to update profile');
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.new !== passwordData.confirm) {
      toast.error('New passwords do not match');
      return;
    }
    if (passwordData.new.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setIsUpdatingPassword(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: passwordData.new
      });

      if (error) throw error;
      toast.success('Password updated successfully!');
      setPasswordData({ new: '', confirm: '' }); // Clear form
    } catch (error: any) {
      toast.error(error.message || 'Failed to update password');
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  // 4. Rendering
  if (isCheckingSession) return null;

  if (!session) {
    return (
      <Layout>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold text-foreground text-center mb-8">
                My Account
              </h1>

              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login"><LogIn className="h-4 w-4 mr-2" /> Login</TabsTrigger>
                  <TabsTrigger value="register"><UserPlus className="h-4 w-4 mr-2" /> Register</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <div className="bg-card rounded-xl border border-border p-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <Label htmlFor="login-email">Email</Label>
                        <Input id="login-email" type="email" value={loginData.email} onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="login-password">Password</Label>
                        <Input id="login-password" type="password" value={loginData.password} onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))} required className="mt-1" />
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                        <LogIn className="h-4 w-4 mr-2" />
                        {isLoading ? 'Logging in...' : 'Login'}
                      </Button>
                    </form>
                  </div>
                </TabsContent>

                <TabsContent value="register">
                  <div className="bg-card rounded-xl border border-border p-6">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="reg-firstName">First Name</Label>
                          <Input id="reg-firstName" value={registerData.firstName} onChange={(e) => setRegisterData(prev => ({ ...prev, firstName: e.target.value }))} required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="reg-lastName">Last Name</Label>
                          <Input id="reg-lastName" value={registerData.lastName} onChange={(e) => setRegisterData(prev => ({ ...prev, lastName: e.target.value }))} required className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="reg-email">Email</Label>
                        <Input id="reg-email" type="email" value={registerData.email} onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="reg-password">Password</Label>
                        <Input id="reg-password" type="password" value={registerData.password} onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="reg-confirmPassword">Confirm Password</Label>
                        <Input id="reg-confirmPassword" type="password" value={registerData.confirmPassword} onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))} required className="mt-1" />
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                        <UserPlus className="h-4 w-4 mr-2" />
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                      </Button>
                    </form>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, {profileData.firstName || session.user?.user_metadata?.first_name || 'Guest'}!
              </h1>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="mb-8 w-full justify-start overflow-x-auto overflow-y-hidden border-b rounded-none bg-transparent">
                <TabsTrigger value="profile" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"><User className="h-4 w-4 mr-2" /> Profile</TabsTrigger>
                <TabsTrigger value="orders" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"><Package className="h-4 w-4 mr-2" /> Orders</TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"><Settings className="h-4 w-4 mr-2" /> Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                  <form onSubmit={handleUpdateProfile}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>First Name</Label>
                        <Input value={profileData.firstName} onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })} className="mt-1" required />
                      </div>
                      <div>
                        <Label>Last Name</Label>
                        <Input value={profileData.lastName} onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })} className="mt-1" required />
                      </div>
                      <div>
                        <Label>Email <span className="text-xs text-muted-foreground">(Cannot be changed here)</span></Label>
                        <Input value={session.user.email} type="email" className="mt-1 bg-secondary text-muted-foreground" readOnly />
                      </div>
                      <div>
                        <Label>Phone Number</Label>
                        <Input value={profileData.phone} onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })} type="tel" placeholder="e.g. 071 234 5678" className="mt-1" />
                      </div>
                      <div className="md:col-span-2">
                        <Label>Delivery Address</Label>
                        <div className="relative mt-1">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input value={profileData.address} onChange={(e) => setProfileData({ ...profileData, address: e.target.value })} placeholder="Full street address for deliveries" className="pl-10" />
                        </div>
                      </div>
                    </div>
                    <Button type="submit" className="mt-6" disabled={isUpdatingProfile}>
                      {isUpdatingProfile ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="orders">
                <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6">Order History</h2>

                  {orders.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Package className="h-12 w-12 mx-auto mb-4 opacity-50 text-primary" />
                      <p className="text-lg font-medium text-foreground">No orders yet</p>
                      <p className="text-sm mt-1 mb-4">You haven't placed any orders with us yet.</p>
                      <Button onClick={() => navigate('/shop')} variant="outline">Start Shopping</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border border-border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/50 transition-colors">
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <span className="font-semibold text-foreground">Order #{order.id.split('-')[0]}</span>
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                                {order.status}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Placed on {new Date(order.created_at).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {order.order_items?.length || 0} items
                            </p>
                          </div>
                          <div className="text-left md:text-right">
                            <p className="font-bold text-lg">R {Number(order.total_amount).toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="settings">
                <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                  <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-md">
                    <div>
                      <Label>New Password</Label>
                      <Input type="password" value={passwordData.new} onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })} className="mt-1" required />
                    </div>
                    <div>
                      <Label>Confirm New Password</Label>
                      <Input type="password" value={passwordData.confirm} onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })} className="mt-1" required />
                    </div>
                    <Button type="submit" className="mt-4" disabled={isUpdatingPassword}>
                      {isUpdatingPassword ? 'Updating...' : 'Update Password'}
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Account;