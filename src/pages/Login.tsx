
import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block animate-fade-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1587502537745-84b86da1204f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Chácara Alegria"
                  className="rounded-lg shadow-lg object-cover h-[600px] w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 rounded-lg flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-nature text-white mb-2">
                    Chácara Alegria
                  </h2>
                  <p className="text-gray-200 max-w-md">
                    Faça login ou crie uma conta para agendar sua visita e desfrutar de todos os benefícios que nossa chácara oferece.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:p-8">
              {isLogin ? (
                <LoginForm onSwitchToRegister={handleSwitchToRegister} />
              ) : (
                <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
