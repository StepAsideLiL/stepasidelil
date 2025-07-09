import { email } from "./email";
import { socialLinks } from "./social-links";
import { topSkills } from "./top-skills";
import { technologiesIInterestedIn } from "./technologies-i-interested-in";
import { projects } from "./projects";
import { educations } from "./educations";
import { introduction } from "./introduction";
import { allSkills } from "./all-skills";

const portfoilioInfo = {
  introduction,
  email,
  socialLinks,
  skills: {
    allSkills,
    topSkills,
    technologiesIInterestedIn,
  },
  projects,
  educations,
};

export default portfoilioInfo;
