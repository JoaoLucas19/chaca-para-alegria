
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";

// Esquema de validação para cadastro
const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres" })
    .max(50, { message: "Nome não pode ter mais que 50 caracteres" }),
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .email({ message: "Email inválido" }),
  phone: z
    .string()
    .min(10, { message: "Telefone inválido, digite o DDD + número" })
    .max(15, { message: "Telefone inválido" })
    .regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/, { 
      message: "Formato de telefone inválido" 
    }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
    .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula" })
    .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula" })
    .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número" }),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos e condições"
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"]
});

// Tipo inferido do schema
type RegisterFormValues = z.infer<typeof registerSchema>;

// Valores padrão para o formulário
const defaultValues: RegisterFormValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false
};

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Inicializar o formulário com react-hook-form e validação zod
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  // Função para lidar com o envio do formulário
  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsLoading(true);
      
      // Simulando um delay de requisição
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Aqui seria a integração com o backend
      console.log("Register data:", data);
      
      // Mostra mensagem de sucesso
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Você já pode fazer login no sistema.",
      });
      
      // Reset do formulário
      form.reset();
      
      // Redireciona para o login
      onSwitchToLogin();
      
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      toast({
        title: "Erro ao realizar cadastro",
        description: "Tente novamente mais tarde.",
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
          Criar Conta
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome completo" 
                    {...field} 
                    disabled={isLoading}
                    className="bg-gray-50"
                    autoComplete="name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    type="email"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(00) 00000-0000" 
                    {...field} 
                    disabled={isLoading}
                    className="bg-gray-50"
                    autoComplete="tel"
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
                      autoComplete="new-password"
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                      disabled={isLoading}
                      className="bg-gray-50 pr-10"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showConfirmPassword ? (
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

          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-gray-50">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    Eu concordo com os{" "}
                    <a 
                      href="#" 
                      className="text-chacara-primary hover:text-chacara-dark hover:underline"
                    >
                      Termos de Serviço
                    </a>{" "}
                    e{" "}
                    <a 
                      href="#" 
                      className="text-chacara-primary hover:text-chacara-dark hover:underline"
                    >
                      Política de Privacidade
                    </a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-chacara-primary hover:bg-chacara-dark text-white transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Processando..." : "Criar Conta"}
          </Button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Já tem uma conta?{" "}
              <Button
                type="button"
                variant="link"
                onClick={onSwitchToLogin}
                className="text-chacara-primary hover:text-chacara-dark p-0 font-medium"
              >
                Entrar
              </Button>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
