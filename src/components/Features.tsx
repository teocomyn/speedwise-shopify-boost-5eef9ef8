
import React from 'react';
import { 
  Image, 
  Code, 
  Layers, 
  FileCode, 
  AlertCircle, 
  TrendingUp,
  Zap,
  Shield
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Image className="w-6 h-6" />,
      title: "Optimisation d'images auto",
      description: "Compression automatique en WebP pour toutes les images > 500 Ko",
      color: "blue"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Minification JS/CSS",
      description: "Réduction automatique de la taille des fichiers code",
      color: "green"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Critical CSS injection",
      description: "Chargement prioritaire du CSS critique pour le rendu",
      color: "purple"
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: "Script Manager",
      description: "Gestion fine des scripts par page avec activation/désactivation",
      color: "orange"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Détection apps inutiles",
      description: "Identification des applications Shopify qui ralentissent votre site",
      color: "red"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Score SEO impact",
      description: "Mesure de l'impact des performances sur votre référencement",
      color: "indigo"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lazy loading intelligent",
      description: "Configuration automatique sans impacter le hero de votre site",
      color: "yellow"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Monitoring 24/7",
      description: "Surveillance continue avec alertes en cas de dégradation",
      color: "emerald"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    indigo: "bg-indigo-100 text-indigo-600",
    yellow: "bg-yellow-100 text-yellow-600",
    emerald: "bg-emerald-100 text-emerald-600"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Toutes les optimisations
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              en mode automatique
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Speedwise s'occupe de tout. Aucune compétence technique requise, 
            tous les correctifs sont appliqués automatiquement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <div className={`w-12 h-12 rounded-xl ${colorClasses[feature.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Résultats typiques après optimisation
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">+47%</div>
                <div className="text-gray-700">Taux de conversion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">-3.2s</div>
                <div className="text-gray-700">Temps de chargement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">+23%</div>
                <div className="text-gray-700">Trafic organique</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
