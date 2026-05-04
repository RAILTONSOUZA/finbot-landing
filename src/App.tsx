import { useState } from 'react';
import {
  Shield,
  Download,
  FileSpreadsheet,
  FileText,
  Database,
  Smartphone,
  Brain,
  BarChart3,
  MessageCircle,
  CheckCircle2,
  Lock,
  RefreshCcw,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Inteligência Artificial",
      description: "Chatbot inteligente que ajuda a categorizar suas transações e responder suas dúvidas financeiras."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Gráficos Detalhados",
      description: "Visualize Receitas vs Despesas e distribuição por categoria com gráficos interativos."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "100% Mobile",
      description: "Instale como app no seu celular ou use no computador. Funciona offline."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Dados Locais",
      description: "Todas as informações ficam salvas no seu dispositivo. Sua privacidade garantida."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Exportação Flexível",
      description: "Gere Excel, PDF ou backup dos seus dados a qualquer momento."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Controle Total",
      description: "Gerencie receitas e despesas com filtros por período, tipo e categoria."
    }
  ];

  const exportOptions = [
    {
      icon: <FileSpreadsheet className="w-12 h-12" />,
      title: "Planilha Excel",
      description: "Exporte todas as movimentações com totais por categoria organizados em abas.",
      color: "bg-green-500"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Relatório PDF",
      description: "Gere relatórios profissionais com resumo e listagem completa das transações.",
      color: "bg-red-500"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backup JSON",
      description: "Salve todos os dados em arquivo JSON. Perfeito para migrar entre dispositivos ou fazer restauração.",
      color: "bg-blue-500"
    }
  ];

  const privacyBenefits = [
    "Nenhum dado sai do seu dispositivo",
    "Sem cadastro ou login necessário",
    "Sem conexão com servidores externos",
    "Você controla 100% suas informações",
    "Funciona completamente offline"
  ];

  const faqs = [
    {
      question: "Meus dados ficam salvos na nuvem?",
      answer: "Não! Todos os seus dados financeiros ficam armazenados exclusivamente no seu dispositivo. Nada é enviado para servidores externos."
    },
    {
      question: "Posso acessar meus dados em outro celular?",
      answer: "Sim! Use a função de Backup para exportar seus dados em JSON e restaure no novo dispositivo quando quiser."
    },
    {
      question: "Preciso de internet para usar o FinBot?",
      answer: "Não! O FinBot funciona 100% offline. Você pode gerenciar suas finanças mesmo sem conexão com a internet."
    },
    {
      question: "Como funciona a exportação para Excel?",
      answer: "Com um clique, geramos uma planilha completa com todas as suas transações organizadas por categoria, incluindo totais e médias."
    },
    {
      question: "É seguro fazer backup dos meus dados?",
      answer: "Extremamente seguro! O backup é um arquivo JSON que você controla totalmente. Pode salvar no Google Drive, pendrive ou onde preferir."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-white font-bold text-xl">FinBot IA</span>
            </div>
            <a
              href="https://finbot-5xm.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25"
            >
              Experimentar Agora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Privacidade Garantida - Dados 100% Locais</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Controle suas finanças com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                autonomia total
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              O FinBot IA é um gerenciador financeiro inteligente que roda no seu dispositivo.
              Sem nuvem, sem cadastros, sem rastreadores. Você é o dono dos seus dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://finbot-5xm.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Usar FinBot Grátis
              </a>
              <a
                href="#recursos"
                className="px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold text-lg rounded-xl transition-all duration-200 border border-slate-600 flex items-center justify-center gap-2"
              >
                Conhecer Recursos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Highlight Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Sua Privacidade em Primeiro Lugar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Seus dados nunca saem do seu celular
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Diferente de outros apps financeiros, o FinBot IA processa e armazena tudo localmente.
                Nenhuma empresa pode acessar suas informações financeiras.
              </p>
              <ul className="space-y-4">
                {privacyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-800/80 border border-slate-700 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Arquitetura Local</h3>
                    <p className="text-slate-400 text-sm">Processamento 100% no dispositivo</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-slate-300">Dados salvos localmente</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl">
                    <div className="w-3 h-3 bg-slate-500 rounded-full" />
                    <span className="text-slate-400">✕ Nuvem</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl">
                    <div className="w-3 h-3 bg-slate-500 rounded-full" />
                    <span className="text-slate-400">✕ Servidores externos</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl">
                    <div className="w-3 h-3 bg-slate-500 rounded-full" />
                    <span className="text-slate-400">✕ Rastreadores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Options Section */}
      <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Exporte seus dados como preferir
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tenha total controle sobre suas informações com múltiplas opções de exportação
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {exportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-slate-400">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tudo que você precisa para suas finanças
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Recursos completos para gerenciar seu dinheiro de forma simples e inteligente
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-emerald-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backup Detail Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border border-blue-500/30 rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                  <RefreshCcw className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">Backup & Restauração</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Nunca perca seus dados
                </h2>
                <p className="text-lg text-slate-300 mb-8">
                  Faça backup completo do seu histórico financeiro a qualquer momento.
                  Ideal para migrar entre dispositivos ou manter um arquivo de segurança.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Exporta todas as transações
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Inclui categorias e configurações
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Restauração simples em segundos
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Arquivo JSON - padrão universal
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-semibold">Formato JSON</span>
                </div>
                <pre className="text-sm text-slate-400 overflow-x-auto">
{`{
  "transactions": [...],
  "categories": [...],
  "settings": {...},
  "version": "1.0"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-600/30 to-blue-600/30 border border-emerald-500/30 rounded-3xl p-12">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comece a usar agora mesmo
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              100% gratuito, sem cadastro, sem limites. Suas finanças sob seu controle total.
            </p>
            <a
              href="https://finbot-5xm.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl rounded-xl transition-all duration-200 shadow-xl shadow-emerald-500/30"
            >
              <Smartphone className="w-6 h-6" />
              Acessar FinBot IA
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-white font-bold text-xl">FinBot IA</span>
            </div>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <span>Dados 100% locais</span>
              <span>•</span>
              <span>Sem cadastro</span>
              <span>•</span>
              <span>Gratuito</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 FinBot IA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
