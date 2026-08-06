import type { HeroData, PolicyData } from "@/website/types/common";

export const disclaimerHeroData: HeroData = {
  title: "Disclaimer",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/policies/disclaimer.jpg",
      mobile_file: "/pages/policies/disclaimer.jpg",
    },
    alt: "Disclaimer",
  },
};

export const disclaimerData: PolicyData = {
  heading: "Important Information",
  content:
    `<p>The information provided on this website is for general informational purposes only and is intended to offer an overview of our projects, services, and developments. While every effort has been made to ensure that the content is accurate and up to date, all project details, specifications, floor plans, images, amenities, pricing, availability, and other information displayed on this website are indicative in nature and may be revised, modified, or withdrawn without prior notice.</p><br/><p>The photographs, architectural renderings, illustrations, computer-generated images, and visual representations featured throughout this website are artistic impressions intended solely for representational purposes. Actual construction, landscaping, finishes, views, specifications, and amenities may vary depending on the final approved plans, site conditions, statutory requirements, and ongoing development.</p><br/><p>Nothing contained on this website shall be construed as a legal offer, contractual commitment, warranty, or representation of any kind. Any purchase decision should be made only after reviewing the relevant project documents, approvals, agreements, and applicable terms and conditions provided by the developer.</p><br/><p>Prospective buyers are encouraged to independently verify all project information, approvals, specifications, payment plans, and legal documentation before making any investment or purchase decision. The developer shall not be held liable for any loss or damages arising from reliance on the information presented on this website.</p><br/><p>The use of this website is subject to applicable laws and regulations. By accessing and using this website, you acknowledge that you have read, understood, and agreed to this disclaimer. Should you require any clarification regarding the information presented, please contact our team for the latest project details and official documentation.</p>`,
};
