import type { HeroData, PolicyData } from "@/website/types/common";

export const termsHeroData: HeroData = {
  title: "Terms & Conditions",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/policies/terms.jpg",
      mobile_file: "/pages/policies/terms.jpg",
    },
    alt: "Terms & Conditions",
  },
};

export const termsData: PolicyData = {
  heading: "Terms of Use",
  content:
    `<p>Welcome to our website. By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions. If you do not agree with any part of these terms, we kindly request that you refrain from using this website.</p><br/><p>The information presented on this website is provided for general informational purposes only. While reasonable efforts are made to ensure that the content is accurate and up to date, project details, specifications, pricing, availability, layouts, amenities, images, and other information are subject to change without prior notice and should not be considered a contractual commitment.</p><br/><p>All content available on this website, including text, photographs, graphics, illustrations, logos, designs, layouts, and other materials, is the intellectual property of the developer or its respective licensors and is protected under applicable copyright and intellectual property laws. Unauthorized reproduction, distribution, modification, or commercial use of any content without prior written consent is strictly prohibited.</p><br/><p>Users agree to use this website only for lawful purposes and in a manner that does not interfere with its operation, security, or accessibility. Any misuse of the website, including attempts to gain unauthorized access, distribute malicious software, or disrupt website functionality, may result in legal action.</p><br/><p>This website may contain links to third-party websites for user convenience. Such links do not imply endorsement or responsibility for the content, services, or privacy practices of external websites. Users access third-party websites at their own discretion and risk.</p><br/><p>The developer reserves the right to modify, update, suspend, or discontinue any part of the website, its content, or these Terms & Conditions at any time without prior notice. Continued use of the website following any updates constitutes acceptance of the revised terms.</p><br/><p>These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the competent courts having authority over the matter.</p>`,
};