import { motion } from 'framer-motion'

export default function About({ t, isMobile }) {
  return (
    <div className={`${
      isMobile 
        ? 'space-y-8' 
        : 'grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'
    } animate-slide-up`}>
      <div className="space-y-6 md:space-y-8">
        <div>
          <h2 className={`${
            isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'
          } font-light mb-4 md:mb-6`}>{t.about.title}</h2>
          <div className="w-12 h-0.5 bg-white/60 mb-6 md:mb-8"></div>
        </div>
        
        <div className={`space-y-4 md:space-y-6 ${
          isMobile ? 'text-base' : 'text-lg'
        } text-white/80 leading-relaxed`}>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </div>
      
      <div className={isMobile ? 'mt-8' : 'lg:pl-16'}>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {[
            { number: '60+', label: t.about.stats.projects },
            { number: '5+', label: t.about.stats.years },
            { number: '25+', label: t.about.stats.clients },
            { number: '100%', label: t.about.stats.dedication }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={`${
                isMobile ? 'text-2xl' : 'text-4xl'
              } font-light mb-2`}>{stat.number}</div>
              <div className={`text-white/60 ${
                isMobile ? 'text-xs' : 'text-sm'
              }`}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className={`${
          isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'
        } border-t border-white/10`}>
          <h3 className={`${
            isMobile ? 'text-lg' : 'text-xl'
          } font-medium mb-3 md:mb-4`}>{t.about.currently}</h3>
          <div className={`space-y-2 md:space-y-3 text-white/70 ${
            isMobile ? 'text-sm' : ''
          }`}>
            {t.about.activities.map((activity, index) => (
              <p key={index}>{activity}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 