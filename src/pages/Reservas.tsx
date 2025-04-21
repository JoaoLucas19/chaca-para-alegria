
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";
import { Check } from "lucide-react";

const Reservas = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Vista da chácara"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6">
                Reserve sua Data
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Preencha o formulário abaixo para solicitar uma reserva da nossa chácara para seu próximo evento.
              </p>
              <a 
                href="#reservation-form" 
                className="px-8 py-4 bg-chacara-primary text-white rounded-lg font-medium hover:bg-chacara-dark transition-all inline-block hover:shadow-lg"
              >
                Solicitar Agora
              </a>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-4">
                Como Funciona o Processo de Reserva
              </h2>
              <p className="text-lg text-gray-600">
                Conheça como é simples reservar nossa chácara para o seu evento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-animation">
              <StepCard
                number="1"
                title="Solicite uma Reserva"
                description="Preencha o formulário com seus dados e informações do evento."
              />
              <StepCard
                number="2"
                title="Confirmamos a Disponibilidade"
                description="Nossa equipe verifica a disponibilidade da data e entra em contato."
              />
              <StepCard
                number="3"
                title="Realize o Pagamento"
                description="Confirme sua reserva com o pagamento inicial de 50% do valor."
              />
              <StepCard
                number="4"
                title="Aproveite seu Evento"
                description="Chegue no dia marcado e aproveite sua estadia na chácara."
              />
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section id="reservation-form" className="py-16 bg-chacara-light scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-4">
                Solicite sua Reserva
              </h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário abaixo e entraremos em contato para confirmar a disponibilidade.
              </p>
            </div>

            <ReservationForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-gray-600">
                Tire suas dúvidas sobre o aluguel da nossa chácara.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 staggered-animation">
                <FaqItem
                  question="Qual a capacidade máxima de pessoas na chácara?"
                  answer="Nossa chácara comporta confortavelmente até 150 pessoas para eventos e oferece acomodação para pernoite de até 20 pessoas, distribuídas em 5 quartos."
                />
                <FaqItem
                  question="É necessário pagar algum valor de entrada para reservar a data?"
                  answer="Sim, para confirmar a reserva é necessário o pagamento de 50% do valor total. O restante pode ser pago até 3 dias antes da data do evento ou estadia."
                />
                <FaqItem
                  question="Posso levar meus próprios alimentos e bebidas?"
                  answer="Sim! Você tem total liberdade para levar seus próprios alimentos e bebidas. Nossa cozinha está equipada com geladeira, fogão, micro-ondas e utensílios básicos."
                />
                <FaqItem
                  question="A chácara oferece serviço de limpeza durante a estadia?"
                  answer="Para estadias de final de semana, incluímos uma limpeza básica no segundo dia. Para eventos, oferecemos serviço de limpeza pós-evento mediante taxa adicional."
                />
                <FaqItem
                  question="Existe alguma restrição quanto ao som/música na chácara?"
                  answer="Sim, devido às leis municipais, o som alto é permitido apenas até às 22h. Após esse horário, pedimos que o volume seja reduzido para respeitar os vizinhos e as normas locais."
                />
                <FaqItem
                  question="É permitido levar animais de estimação?"
                  answer="Sim, aceitamos animais de estimação de pequeno e médio porte, mediante informação prévia. Solicitamos apenas que os donos sejam responsáveis pela limpeza e comportamento dos animais."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contato Rápido */}
        <section className="py-12 bg-chacara-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-6 animate-fade-in">
              Prefere Falar Diretamente Conosco?
            </h2>
            <div className="flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 hover:text-chacara-accent transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.721 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9201C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77382 17.3148 6.72533 15.2663 5.18999 12.8501C3.49997 10.2413 2.44824 7.27097 2.11999 4.1801C2.095 3.90356 2.12787 3.62482 2.21649 3.36172C2.30512 3.09861 2.44756 2.85723 2.63476 2.65281C2.82196 2.44839 3.0498 2.28542 3.30379 2.17462C3.55777 2.06382 3.83233 2.00773 4.10999 2.0001H7.10999C7.5953 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04207 3.23954 9.10999 3.7201C9.23662 4.68016 9.47144 5.62282 9.80999 6.5301C9.94454 6.88802 9.97366 7.27701 9.8939 7.65098C9.81415 8.02494 9.62886 8.36821 9.35999 8.6401L8.08999 9.9101C9.51355 12.4136 11.5864 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9751 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7634 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@chacaraalegria.com.br"
                className="flex items-center gap-2 hover:text-chacara-accent transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                contato@chacaraalegria.com.br
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

// Componente para os cards de passos
const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center hover-scale">
      <div className="w-12 h-12 bg-chacara-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-chacara-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Componente para os itens de FAQ
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-chacara-dark mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Reservas;
