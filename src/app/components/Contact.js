import { motion } from 'framer-motion'

export default function Contact({ t, isMobile, handleContactClick, handleDownloadCV }) {
  return (
    <div className="text-center animate-fade-up">
      <div className={isMobile ? 'mb-12' : 'mb-16'}>
        <h2 className={`${
          isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'
        } font-light mb-4 md:mb-6`}>{t.contact.title}</h2>
        <div className="w-12 h-0.5 bg-white/60 mx-auto mb-6 md:mb-8"></div>
        <p className={`${
          isMobile ? 'text-base px-4' : 'text-xl'
        } text-white/80 max-w-2xl mx-auto leading-relaxed`}>
          {t.contact.subtitle}
        </p>
      </div>
      
      <div className={`grid ${
        isMobile 
          ? 'grid-cols-1 gap-4 max-w-sm mx-auto mb-12' 
          : 'grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16'
      }`}>
        {[
          { label: 'Email', value: 'johan_harol@outlook.com', action: 'mailto:johan_harol@outlook.com' },
          { label: 'LinkedIn', value: 'linkedin.com/in/mrjohanf', action: 'https://linkedin.com/in/mrjohanf' },
          { label: 'GitHub', value: 'github.com/mrjohanf', action: 'https://github.com/mrjohanf' }
        ].map((contact, index) => (
          <button
            key={contact.label}
            onClick={() => handleContactClick(contact.action)}
            className={`block w-full ${
              isMobile ? 'p-4' : 'p-8'
            } border border-white/10 rounded-2xl hover:border-white/30 hover-lift organic-transition text-left`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`text-white/60 ${
              isMobile ? 'text-xs' : 'text-sm'
            } mb-2`}>{contact.label}</div>
            <div className={`font-medium ${
              isMobile ? 'text-sm' : ''
            }`}>{contact.value}</div>
          </button>
        ))}
      </div>
      
      <button 
        onClick={handleDownloadCV}
        className={`bg-white text-black ${
          isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'
        } rounded-full font-medium hover-lift organic-transition`}
      >
        {t.contact.downloadCV}
      </button>
    </div>
  )
} 