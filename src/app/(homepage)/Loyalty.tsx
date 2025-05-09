import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
export default function Loyalty() {
  return (
    <div className="bg-primary-dark text-white py-40">
      <div className="max-w-3xl mx-auto">
        <Heading level={2} as="h1" className="text-center text-white">Let's Talk <span className="text-primary">Loyalty</span></Heading>
        <Text as="p" className="text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
    </div>
  );
};