
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";

const Index = () => {
  // Slides para o carrossel
  const carouselSlides = [
    {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Chácara Alegria",
      subtitle: "Seu refúgio de tranquilidade e diversão em meio à natureza"
    },
    {
      url: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      title: "Eventos Inesquecíveis",
      subtitle: "O lugar perfeito para seus momentos especiais"
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      title: "Lazer e Diversão",
      subtitle: "Estrutura completa para toda a família"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Carrossel Principal */}
        <section className="relative">
          <ImageCarousel slides={carouselSlides} />
          <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center animate-fade-in" style={{ animationDelay: "1s" }}>
            <Link
              to="/reservas"
              className="bg-chacara-primary hover:bg-chacara-dark text-white px-8 py-4 rounded-lg font-medium transition-all text-lg shadow-lg hover:shadow-xl"
            >
              Reserve Agora
            </Link>
          </div>
        </section>

        {/* Sobre a Chácara */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-6 section-heading">
                  Bem-vindo à Chácara Alegria
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Em meio à natureza exuberante e a apenas 40 minutos da cidade, a Chácara Alegria é o refúgio perfeito para quem busca momentos de lazer, descanso e celebração.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Com uma área de 5.000m², oferecemos uma experiência única, combinando conforto e contato com a natureza. Seja para um final de semana em família, uma celebração especial ou um evento corporativo, nossa infraestrutura completa atende a todas as necessidades.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-1" />
                    <span>Piscina espaçosa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-1" />
                    <span>Churrasqueira completa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-1" />
                    <span>Campo de futebol</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-1" />
                    <span>Quartos confortáveis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-1" />
                    <span>Salão de festas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-chacara-primary flex-shrink-0 mt-1" />
                    <span>Amplo estacionamento</span>
                  </div>
                </div>
                <Link
                  to="/informacoes"
                  className="inline-block bg-chacara-primary hover:bg-chacara-dark text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  Conheça Mais
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Vista da chácara"
                    className="rounded-lg shadow-md hover-scale h-48 md:h-64 w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                    alt="Área externa"
                    className="rounded-lg shadow-md hover-scale h-48 md:h-64 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1565623833408-d77e39b88af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    alt="Piscina"
                    className="rounded-lg shadow-md hover-scale h-48 md:h-64 w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Área de lazer"
                    className="rounded-lg shadow-md hover-scale h-48 md:h-64 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços/Diferenciais */}
        <section className="py-20 bg-chacara-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-4">
                Perfeita para Qualquer Ocasião
              </h2>
              <p className="text-lg text-gray-600">
                Nossa chácara oferece estrutura completa para diversos tipos de eventos e estadias, com todo o conforto que você merece.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation">
              <FeatureCard
                icon={
                  <svg className="w-12 h-12 text-chacara-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                }
                title="Eventos Familiares"
                description="O lugar ideal para aniversários, batizados, chás de bebê e reuniões de família. Estrutura completa para adultos e crianças."
              />
              <FeatureCard
                icon={
                  <svg className="w-12 h-12 text-chacara-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                }
                title="Confraternizações"
                description="Espaço perfeito para confraternizações de empresas, encontros entre amigos e celebrações de datas especiais."
              />
              <FeatureCard
                icon={
                  <svg className="w-12 h-12 text-chacara-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                }
                title="Casamentos"
                description="Um cenário natural deslumbrante para celebrar o grande dia com elegância e privacidade, em meio à natureza."
              />
              <FeatureCard
                icon={
                  <svg className="w-12 h-12 text-chacara-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                }
                title="Eventos Corporativos"
                description="Ambiente propício para team buildings, treinamentos e workshops corporativos, com infraestrutura para todas as necessidades."
              />
              <FeatureCard
                icon={
                  <svg className="w-12 h-12 text-chacara-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                }
                title="Hospedagem para Grupos"
                description="Acomodações confortáveis para grupos de amigos e famílias que desejam desfrutar de um fim de semana na natureza."
              />
              <FeatureCard
                icon={
                  <svg className="w-12 h-12 text-chacara-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 8l-3.293-3.293A1 1 0 0112 4z" clipRule="evenodd"></path>
                  </svg>
                }
                title="Retiros e Workshops"
                description="Ambiente tranquilo e inspirador para retiros espirituais, workshops artísticos e eventos de mindfulness."
              />
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-serif text-chacara-dark font-semibold mb-4">
                Conheça Nossa Estrutura
              </h2>
              <p className="text-lg text-gray-600">
                Espaços bem cuidados e estrutura completa para proporcionar o máximo de conforto durante sua estadia.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 staggered-animation">
              <GalleryImage 
                src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Vista geral da chácara" 
                className="md:col-span-2"
              />
              <GalleryImage 
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Piscina" 
              />
              <GalleryImage 
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                alt="Quartos" 
              />
              <GalleryImage 
                src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Área de churrasqueira" 
              />
              <GalleryImage 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Fachada" 
              />
              <GalleryImage 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Área verde" 
                className="md:col-span-2"
              />
            </div>

            <div className="text-center mt-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Link
                to="/informacoes"
                className="inline-block bg-chacara-primary hover:bg-chacara-dark text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                Ver Mais Fotos
              </Link>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-chacara-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-serif font-semibold mb-4">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-lg text-gray-300">
                Experiências reais de pessoas que escolheram nossa chácara para seus momentos especiais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation">
              <TestimonialCard
                name="Ana Paula"
                role="Aniversário de 40 anos"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                text="Celebrei meu aniversário na Chácara Alegria e foi simplesmente perfeito! O espaço é lindo, a estrutura completa e o atendimento foi excelente. Todos os convidados ficaram encantados."
              />
              <TestimonialCard
                name="Carlos Eduardo"
                role="Casamento"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                text="Realizamos nosso casamento na chácara e foi a escolha certa. A natureza ao redor criou um ambiente mágico para nossa celebração. A equipe foi muito atenciosa em todos os detalhes."
              />
              <TestimonialCard
                name="Empresa Tech Solutions"
                role="Confraternização Anual"
                image="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                text="Realizamos nossa confraternização de fim de ano na Chácara Alegria. Foi um dia inteiro de atividades, diversão e integração. A infraestrutura atendeu perfeitamente as necessidades da nossa equipe."
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-chacara-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Pronto para Vivenciar Momentos Inesquecíveis?
              </h2>
              <p className="text-xl mb-8">
                Reserve agora nossa chácara e proporcione uma experiência única para você e seus convidados.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/reservas"
                  className="px-8 py-4 bg-white text-chacara-primary rounded-lg font-medium hover:bg-gray-100 transition-all hover:shadow-lg"
                >
                  Solicitar Reserva
                </Link>
                <Link
                  to="/informacoes"
                  className="px-8 py-4 bg-chacara-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
                >
                  Mais Informações
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Componente para os cards de recursos/diferenciais
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover-scale">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-chacara-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Componente para as imagens da galeria
const GalleryImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  return (
    <div className={`overflow-hidden rounded-lg hover-scale ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

// Componente para os cards de depoimentos
const TestimonialCard = ({ name, role, image, text }: { name: string; role: string; image: string; text: string }) => {
  return (
    <div className="bg-chacara-dark bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-chacara-accent"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{text}"</p>
    </div>
  );
};

export default Index;
