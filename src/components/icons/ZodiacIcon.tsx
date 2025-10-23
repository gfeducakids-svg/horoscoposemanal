import dynamic from 'next/dynamic';
import type { Sign } from '@/lib/quiz-data';

interface ZodiacIconProps extends React.SVGProps<SVGSVGElement> {
  sign: Sign | string;
}

const iconComponents = {
  aries: dynamic(() => import('./zodiac/AriesIcon')),
  taurus: dynamic(() => import('./zodiac/TaurusIcon')),
  gemini: dynamic(() => import('./zodiac/GeminiIcon')),
  cancer: dynamic(() => import('./zodiac/CancerIcon')),
  leo: dynamic(() => import('./zodiac/LeoIcon')),
  virgo: dynamic(() => import('./zodiac/VirgoIcon')),
  libra: dynamic(() => import('./zodiac/LibraIcon')),
  scorpio: dynamic(() => import('./zodiac/ScorpioIcon')),
  sagittarius: dynamic(() => import('./zodiac/SagittariusIcon')),
  capricorn: dynamic(() => import('./zodiac/CapricornIcon')),
  aquarius: dynamic(() => import('./zodiac/AquariusIcon')),
  pisces: dynamic(() => import('./zodiac/PiscesIcon')),
};

const ZodiacIcon = ({ sign, ...props }: ZodiacIconProps) => {
  const IconComponent = iconComponents[sign as Sign];

  if (!IconComponent) {
    return null; // or a default icon
  }

  return <IconComponent {...props} />;
};

export default ZodiacIcon;
