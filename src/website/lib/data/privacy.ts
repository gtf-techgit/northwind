import type { HeroData, PolicyData } from "@/website/types/common";

export const privacyHeroData: HeroData = {
  title: "Privacy Policy",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/policies/privacy.jpg",
      mobile_file: "/pages/policies/privacy.jpg",
    },
    alt: "Privacy Policy",
  },
};

export const privacyData: PolicyData = {
  heading: "Your Privacy Matters",
  content:
    `<p>We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, store, and safeguard the information you provide while interacting with our website, enquiry forms, and customer services.
When you contact us or submit an enquiry, we may collect personal information such as your name, email address, phone number, and any other details you voluntarily provide. This information is used solely to respond to your enquiries, provide project-related updates, improve our services, and deliver a more personalized customer experience.</p><br/><p>We take reasonable administrative, technical, and organizational measures to protect your personal information against unauthorized access, misuse, disclosure, alteration, or loss. While we strive to maintain the highest standards of data security, no method of electronic transmission or storage can be guaranteed to be completely secure.</p><br/><p>Our website may use cookies and similar technologies to enhance user experience, analyze website traffic, and improve website performance. These technologies help us better understand visitor preferences and optimize our digital services. You may choose to manage or disable cookies through your browser settings.</p><br/><p>We do not sell, rent, or trade your personal information to third parties. Information may be shared with trusted service providers or regulatory authorities only where necessary to deliver requested services, comply with legal obligations, or protect our legitimate interests.</p><br/><p>Our website may contain links to external websites for your convenience. We are not responsible for the privacy practices, content, or security of third-party websites, and users are encouraged to review their respective privacy policies before sharing any personal information.</p><br/><p>By accessing and using this website, you acknowledge and agree to the terms of this Privacy Policy. We reserve the right to update or modify this policy at any time without prior notice to reflect changes in legal requirements, business practices, or website functionality. We encourage you to review this page periodically to stay informed about how your information is protected.</p>`,
};
