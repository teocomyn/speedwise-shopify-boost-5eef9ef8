
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      description: "Pour tester Speedwise",
      features: [
        "1 scan de base par mois",
        "Rapport de performance détaillé",
        "Recommandations personnalisées",
        "Support par email"
      ],
      cta: "Commencer gratuitement",
      popular: false,
      variant: "outline" as const
    },
    {
      name: "Premium",
      price: "39€",
      period: "/mois",
      description: "Pour boutiques sérieuses",
      features: [
        "Scans illimités",
        "Corrections automatiques en 1 clic",
        "Optimisation hebdomadaire",
        "Monitoring continu 24/7",
        "Alertes en temps réel",
        "Dashboard avancé",
        "Support prioritaire"
      ],
      cta: "Démarrer maintenant",
      popular: true,
      variant: "default" as const
    },
    {
      name: "Pro",
      price: "99€",
      period: "/mois",
      description: "Pour agences & grandes marques",
      features: [
        "Tout du Premium",
        "Intégration GTmetrix + Search Console",
        "A/B tests automatiques",
        "API pour intégrations",
        "Rapports white-label",
        "Support téléphonique dédié",
        "Onboarding personnalisé"
      ],
      cta: "Contactez-nous",
      popular: false,
      variant: "outline" as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tarifs transparents
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              sans surprise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan adapté à vos besoins. 
            Changement ou annulation possible à tout moment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl border p-8 ${
              plan.popular 
                ? 'border-blue-200 bg-white shadow-xl scale-105' 
                : 'border-gray-200 bg-white/80 backdrop-blur-sm'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <Button 
                  variant={plan.variant}
                  size="lg" 
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : ''
                  }`}
                >
                  {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                  {plan.cta}
                </Button>

                <div className="text-left space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            🎯 <strong>Garantie satisfait ou remboursé</strong> sous 30 jours
          </p>
          <p className="text-sm text-gray-500">
            Tous les plans incluent l'accès complet pendant la période d'essai
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
