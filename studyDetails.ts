import { StudyDetail } from './types';
import { socialContent } from './studies/socialSecurity';
import { laborContent } from './studies/laborMarket';
import { safetyContent } from './studies/publicSafety';
import { demographicsContent } from './studies/demographics';

export const studyDetails: { [key: string]: StudyDetail } = {
  'social-security': socialContent,
  'labor-market': laborContent,
  'public-safety': safetyContent,
  'demographics': demographicsContent
};
