import { Section } from '@/components/Section';
import { Heading } from '@/components/typography';
import { StarBackgroundIcon } from '@/components/StarBackgroundIcon';

export default function WhyAffina() {
  return (
    <Section className="bg-primary-dark p-40">
      <div className="max-w-5xl mx-auto relative flex justify-center items-center">
        <StarBackgroundIcon className="absolute z-0" />
        <div className="relative z-10">
          <Heading as="h2" level={1} className="text-white text-center">Why Affina?</Heading>
        </div>
      </div>
    </Section>
  );
} 