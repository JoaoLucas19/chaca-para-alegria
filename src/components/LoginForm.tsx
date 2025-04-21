
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, X } from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

// Esquema de validação para login
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .email({ message: "Email inválido" }),
  password: z
    .string()
    .min(1, { message: "A senha é obrigatória" })
});

// Tipo inferido do schema
type LoginFormValues = z.infer<typeof loginSchema>;

// Valores padrão para o formulário
const defaultValues: LoginFormValues = {
  email: "",
  password: ""
};

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Inicializar o formulário com react-hook-form e validação zod
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  // Função para lidar com o envio do formulário
  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      
      // Simulando um delay de requisição
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Aqui seria a integração com o backend
      console.log("Login data:", data);
      
      // Mostra mensagem de sucesso
      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando para a página inicial...",
      });
      
      // Reset do formulário
      form.reset();
      
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast({
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl bg-white shadow-lg animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif text-chacara-dark font-semibold">
          Entrar
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    {...field} 
                    disabled={isLoading}
                    className="bg-gray-50"
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                      disabled={isLoading}
                      className="bg-gray-50 pr-10"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="button"
              variant="link"
              size="sm"
              className="text-sm font-medium text-chacara-primary hover:text-chacara-dark"
            >
              Esqueceu a senha?
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full bg-chacara-primary hover:bg-chacara-dark text-white transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Processando..." : "Entrar"}
          </Button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <Button
                type="button"
                variant="link"
                onClick={onSwitchToRegister}
                className="text-chacara-primary hover:text-chacara-dark p-0 font-medium"
              >
                Cadastre-se
              </Button>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
