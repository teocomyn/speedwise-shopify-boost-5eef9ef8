
import React from 'react';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Conversions en chute libre",
      description: "Chaque seconde de chargement en plus = -7% de conversions perdues"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Sites d'une lenteur extrême",
      description: "85% des boutiques Shopify chargent en +4 secondes sur mobile"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: "SEO massacré",
      description: "Google pénalise les sites lents dans ses résultats de recherche"
    }
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Votre boutique Shopify
            <span className="text-red-500"> saigne de l'argent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La majorité des boutiques Shopify sont <strong>dramatiquement lentes</strong>. 
            Résultat : vos visiteurs partent avant d'acheter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Les causes principales de la lenteur
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Images non optimisées (+ de 500 Ko)",
              "Trop d'applications Shopify installées",
              "Code JavaScript non minifié",
              "CSS critique non prioritaire",
              "Lazy loading mal configuré",
              "Scripts inutiles qui s'accumulent"
            ].map((cause, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{cause}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
