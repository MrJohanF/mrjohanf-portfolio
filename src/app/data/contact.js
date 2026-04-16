import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { SiLinkedin, SiGithub } from 'react-icons/si'

// `brandColor` es el color oficial de marca que aparece únicamente en hover,
// como micro-recompensa visual (el resto del tiempo el tono queda neutro).
export const contactInfo = [
  {
    id: 'email',
    label: 'Email',
    value: 'johan_harol@outlook.com',
    action: 'mailto:johan_harol@outlook.com',
    icon: EnvelopeIcon,
    brandColor: '#7dd3c0',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mrjohanf',
    action: 'https://linkedin.com/in/mrjohanf',
    icon: SiLinkedin,
    brandColor: '#0A66C2',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/mrjohanf',
    action: 'https://github.com/mrjohanf',
    icon: SiGithub,
    brandColor: '#ffffff',
  },
]
