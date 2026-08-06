import Image from "next/image";
import Heading from "@/website/components/ui/Heading";
import Paragraph from "@/website/components/ui/Paragraph";
import { CsrOverviewData } from "@/website/types/csr";

const CsrOverview = ({ data }: { data: CsrOverviewData }) => {
  const { headingLine1, headingLine2, paragraph, points, image, imageAlt } = data;

  return (
    <section className="relative w-full section-toppadding">
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Heading>
              {headingLine1}
              <br />
              {headingLine2}
            </Heading>

            <Paragraph className="mt-4 max-w-lg">{paragraph}</Paragraph>

            <div className="mt-10">
              {points.map((point, index) => (
                <div
                  key={point + index}
                  className="border-b border-border py-6 font-heading text-lg text-primary first:pt-0 last:border-none"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl-custom lg:aspect-auto lg:h-full">
            <Image
              src={image}
              alt={imageAlt || headingLine1}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsrOverview;
