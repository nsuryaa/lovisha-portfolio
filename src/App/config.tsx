import { Config } from "types";
import { Email, Behance, LinkedIn, Resume, Sun } from "icons";

export const config: Config = {
  name: {
    display: "Lovisha",
  },
  title: {
    display: "UI/UX Designer",
  },
  buttons: [
    {
      name: "github",
      display: "Behance",
      ariaLabel: "Behance profile (opens in new window)",
      icon: <Sun />,
      href: "https://www.behance.net/lovishas",
    },
    {
      name: "linked-in",
      display: "LinkedIn",
      ariaLabel: "LinkedIn profile (opens in new window)",
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/lovisha-s",
    },
    {
      name: "resume",
      display: "Resume",
      ariaLabel: "Resume in Google Drive (opens in new window)",
      icon: <Resume />,
      href: "https://drive.google.com/file/d/1XwoeJNmFNnea2soE48Qs9XF0tb19-jf3/view",
    },
    {
      name: "email",
      display: "Email",
      ariaLabel: "Email contact (opens in new window)",
      icon: <Email />,
      href: "mailto:lovishas567@gmail.com",
    },
  ],
};
