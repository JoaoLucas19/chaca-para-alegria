
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

// Esquema de validação para reserva
const reservationSchema = z.object({
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
    .max(15, { message: "Telefone inválido" }),
  date: z
    .date({
      required_error: "Selecione uma data para a reserva",
    })
    .refine(date => date > new Date(), {
      message: "A data deve ser no futuro"
    }),
  guests: z
    .string()
    .min(1, { message: "Informe o número de convidados" }),
  eventType: z
    .string()
    .min(1, { message: "Selecione o tipo de evento" }),
  additionalServices: z
    .array(z.string())
    .optional(),
  duration: z
    .string()
    .min(1, { message: "Selecione a duração do evento" }),
  message: z
    .string()
    .max(500, { message: "A mensagem não pode ter mais que 500 caracteres" })
    .optional(),
  agreeTerms: z
    .boolean()
    .refine(val => val === true, {
      message: "Você deve aceitar os termos e condições"
    })
});

// Tipo inferido do schema
type ReservationFormValues = z.infer<typeof reservationSchema>;

// Valores padrão para o formulário
const defaultValues: Partial<ReservationFormValues> = {
  name: "",
  email: "",
  phone: "",
  date: undefined,
  guests: "",
  eventType: "",
  additionalServices: [],
  duration: "",
  message: "",
  agreeTerms: false
};

const eventTypes = [
  { value: "aniversario", label: "Aniversário" },
  { value: "casamento", label: "Casamento" },
  { value: "corporativo", label: "Evento Corporativo" },
  { value: "confraternizacao", label: "Confraternização" },
  { value: "outro", label: "Outro" },
];

const additionalServices = [
  { id: "decoracao", label: "Decoração" },
  { id: "buffet", label: "Buffet" },
  { id: "dj", label: "DJ / Música" },
  { id: "fotografo", label: "Fotógrafo" },
  { id: "seguranca", label: "Segurança" },
];

const ReservationForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Inicializar o formulário com react-hook-form e validação zod
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues,
  });

  // Função para lidar com o envio do formulário
  const onSubmit = async (data: ReservationFormValues) => {
    try {
      setIsLoading(true);
      
      // Simulando um delay de requisição
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Aqui seria a integração com o backend
      console.log("Reservation data:", data);
      
      // Mostra mensagem de sucesso
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve para confirmar sua reserva.",
      });
      
      // Reset do formulário
      form.reset();
      
    } catch (error) {
      console.error("Erro ao enviar reserva:", error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 lg:p-8 rounded-xl bg-white shadow-lg animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-chacara-dark font-semibold mb-2">
          Solicite sua Reserva
        </h2>
        <p className="text-gray-600">
          Preencha o formulário abaixo para solicitar uma reserva. Nossa equipe entrará em contato para confirmar a disponibilidade.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data do evento</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal bg-gray-50",
                            !field.value && "text-muted-foreground"
                          )}
                          disabled={isLoading}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: ptBR })
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date < addDays(new Date(), 3)}
                        initialFocus
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Reservas com pelo menos 3 dias de antecedência.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de convidados</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-gray-50">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-20">1-20 pessoas</SelectItem>
                      <SelectItem value="21-50">21-50 pessoas</SelectItem>
                      <SelectItem value="51-100">51-100 pessoas</SelectItem>
                      <SelectItem value="101-150">101-150 pessoas</SelectItem>
                      <SelectItem value="151-200">151-200 pessoas</SelectItem>
                      <SelectItem value="200+">Mais de 200 pessoas</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de evento</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-gray-50">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Duração do evento</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-wrap gap-4"
                    disabled={isLoading}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="meia-diaria" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Meia diária (6 horas)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="diaria" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Diária (12 horas)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="day-use" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Day use (8h às 17h)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="pernoite" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Pernoite (24 horas)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="final-semana" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Final de semana (sexta a domingo)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalServices"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Serviços adicionais</FormLabel>
                  <FormDescription>
                    Selecione os serviços adicionais que você gostaria de incluir
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalServices.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="additionalServices"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0 bg-gray-50 p-4 rounded-md"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                                disabled={isLoading}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem adicional (opcional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Inclua informações adicionais sobre seu evento, necessidades específicas ou perguntas..." 
                    className="resize-none bg-gray-50 min-h-[120px]"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormDescription>
                  Você pode incluir detalhes adicionais sobre seu evento.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-gray-50 rounded-md">
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
                    e confirmo que li as{" "}
                    <a 
                      href="#" 
                      className="text-chacara-primary hover:text-chacara-dark hover:underline"
                    >
                      Políticas de Cancelamento
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
            size="lg"
          >
            {isLoading ? "Enviando..." : "Enviar Solicitação de Reserva"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReservationForm;
