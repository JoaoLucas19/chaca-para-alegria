
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Informacoes = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1571115288753-fbad649457de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Área da piscina"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6">
                Informações sobre Aluguel
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Conheça todos os detalhes sobre como alugar nossa chácara para seus eventos e reuniões especiais.
              </p>
            </div>
          </div>
        </section>

        {/* Principais Características */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-4">
                A Chácara Perfeita para Seu Evento
              </h2>
              <p className="text-lg text-gray-600">
                Nossa chácara oferece um ambiente acolhedor e completo, ideal para celebrações inesquecíveis em meio à natureza.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation">
              <FeatureCard
                title="Amplo Espaço"
                description="Área de 5.000m² com muito verde, perfeito para eventos de todos os tamanhos."
                image="https://images.unsplash.com/photo-1551927411-95e412943b58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              />
              <FeatureCard
                title="Piscina"
                description="Piscina grande com área infantil e espreguiçadeiras para relaxar."
                image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              />
              <FeatureCard
                title="Churrasqueira"
                description="Espaço gourmet completo com churrasqueira, forno de pizza e cozinha equipada."
                image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              />
              <FeatureCard
                title="Acomodações"
                description="5 quartos confortáveis que acomodam até 20 pessoas para pernoite."
                image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              />
              <FeatureCard
                title="Área de Lazer"
                description="Campo de futebol, quadra de vôlei, mesa de ping pong e sinuca."
                image="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1429&q=80"
              />
              <FeatureCard
                title="Estacionamento"
                description="Amplo estacionamento privativo para até 30 carros."
                image="https://images.unsplash.com/photo-1590674668192-1b21d3069aad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1439&q=80"
              />
            </div>
          </div>
        </section>

        {/* Planos de Aluguel */}
        <section className="py-16 bg-chacara-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-4">
                Opções de Aluguel
              </h2>
              <p className="text-lg text-gray-600">
                Escolha o plano que melhor atende às necessidades do seu evento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PlanCard
                title="Day Use"
                price="R$ 1.500"
                description="Aluguel por um dia (8h às 17h) sem pernoite."
                features={[
                  "Acesso a todas as áreas de lazer",
                  "Uso da churrasqueira e cozinha",
                  "Estacionamento",
                  "Capacidade para até 50 pessoas"
                ]}
                popular={false}
              />
              <PlanCard
                title="Final de Semana"
                price="R$ 3.800"
                description="Aluguel de sexta a domingo com pernoite."
                features={[
                  "Acesso a todas as áreas de lazer",
                  "Uso da churrasqueira e cozinha",
                  "Estacionamento",
                  "Acomodação para até 20 pessoas",
                  "Limpeza inclusa"
                ]}
                popular={true}
              />
              <PlanCard
                title="Eventos"
                price="A partir de R$ 2.200"
                description="Para casamentos, aniversários e eventos corporativos."
                features={[
                  "Estrutura para eventos",
                  "Equipe de apoio",
                  "Estacionamento com manobrista",
                  "Capacidade para até 150 pessoas",
                  "Decoração básica inclusa"
                ]}
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* Regras e Políticas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-6 animate-fade-in">
                Regras e Políticas
              </h2>

              <div className="grid md:grid-cols-2 gap-8 staggered-animation">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-chacara-dark mb-4">
                    Condições Gerais
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Check-in: 14h / Check-out: 12h</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Proibido som alto após as 22h</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Animais de estimação permitidos mediante consulta prévia</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Proibido fumar nas áreas internas</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Respeitar a capacidade máxima de pessoas</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-chacara-dark mb-4">
                    Política de Cancelamento
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Cancelamento até 30 dias antes: reembolso de 90%</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Cancelamento até 15 dias antes: reembolso de 50%</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Cancelamento com menos de 15 dias: sem reembolso</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Reagendamento possível sujeito à disponibilidade</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
                      <span>Reserva confirmada após pagamento de 50% do valor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-chacara-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6 animate-fade-in">
              Pronto para Reservar?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Entre em contato conosco ou faça sua solicitação de reserva online agora mesmo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="/reservas"
                className="px-8 py-3 bg-white text-chacara-primary rounded-lg font-medium hover:bg-gray-100 transition-all hover:shadow-lg"
              >
                Solicitar Reserva
              </a>
              <a
                href="tel:+5511999999999"
                className="px-8 py-3 bg-chacara-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

// Componente para os cards de características
const FeatureCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover-scale">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-chacara-dark mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Componente para os cards de planos
const PlanCard = ({ 
  title, 
  price, 
  description, 
  features, 
  popular 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  popular: boolean 
}) => {
  return (
    <div 
      className={`rounded-xl overflow-hidden shadow-sm transition-all animate-fade-in
        ${popular 
          ? 'border-2 border-chacara-primary transform scale-105 bg-white' 
          : 'border border-gray-200 bg-white'
        }`}
    >
      {popular && (
        <div className="bg-chacara-primary text-white text-center py-2 font-medium">
          Mais Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-chacara-dark mb-2">{title}</h3>
        <div className="text-3xl font-bold text-chacara-primary mb-2">{price}</div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <a
          href="/reservas"
          className={`block text-center py-3 px-6 rounded-lg font-medium transition-all
            ${popular 
              ? 'bg-chacara-primary text-white hover:bg-chacara-dark' 
              : 'bg-gray-100 text-chacara-dark hover:bg-gray-200'
            }`}
        >
          Reservar Agora
        </a>
      </div>
    </div>
  );
};

export default Informacoes;
