export default function Footer() {
    return (
      <footer className="bg-[#1F1D2B] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          
          {/* 🔹 Seção da Logo e Descrição */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-2">
              <img src="/images/logoUnionDeveloper.svg" alt="Union Developers" width={40} height={40} />
              <h2 className="text-2xl font-bold">Union Developers</h2>
            </div>
            <p className="text-gray-300 mt-4">
              O Union proporciona experiência para desenvolvedores juniores, transformando-os em profissionais preparados para o mercado.
            </p>
          </div>
  
          {/* 🔹 Links de Navegação */}
          <div className="flex space-x-12 mt-8 md:mt-0">
            <div>
              <h3 className="font-bold text-lg mb-2">Saiba mais</h3>
              <ul className="space-y-1">
                <li><a href="#sobre" className="hover:text-gray-400 transition">Sobre</a></li>
                <li><a href="#depoimentos" className="hover:text-gray-400 transition">Depoimentos</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-bold text-lg mb-2">Dúvidas</h3>
              <ul className="space-y-1">
                <li><a href="#faq" className="hover:text-gray-400 transition">FAQ</a></li>
                <li><a href="#como-funciona" className="hover:text-gray-400 transition">Como funciona</a></li>
              </ul>
            </div>
          </div>
  
          {/* 🔹 Redes Sociais */}
          <div className="mt-8 md:mt-0 flex flex-col items-center space-y-4">
            <a href="mailto:contato@union.com" className="flex flex-col items-center space-y-1 hover:text-gray-400 transition">
              <img src="/images/emailIcon.svg" alt="Email" width={24} height={24} />
              <span className="text-sm">Email</span>
            </a>
            <a href="https://linkedin.com" target="_blank" className="flex flex-col items-center space-y-1 hover:text-gray-400 transition">
              <img src="/images/linkedinIcon.svg" alt="LinkedIn" width={24} height={24} />
              <span className="text-sm">Linkedin</span>
            </a>
            <a href="https://github.com" target="_blank" className="flex flex-col items-center space-y-1 hover:text-gray-400 transition">
              <img src="/images/githubIcon.svg" alt="GitHub" width={24} height={24} />
              <span className="text-sm">Github</span>
            </a>
          </div>
        </div>
  
        {/* 🔹 Linha de Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          © Union Developers - 2025
        </div>
      </footer>
    );
  }
  