import {
  EnvelopeIcon,
  CodeBracketIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

export const contactInfo = [
  {
    id: 'email',
    label: 'Email',
    value: 'johan_harol@outlook.com',
    action: 'mailto:johan_harol@outlook.com',
    icon: EnvelopeIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mrjohanf',
    action: 'https://linkedin.com/in/mrjohanf',
    icon: UserIcon,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/mrjohanf',
    action: 'https://github.com/mrjohanf',
    icon: CodeBracketIcon,
  },
]
