import { Button } from '@/components/Button';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
export default function Loyalty() {
  return (
    <div className="bg-primary-dark py-40">
      <div className="mx-auto text-white text-center">
        <Heading level={2} as="h1" className="text-center text-white text-[7rem]">Let's Talk <span className="text-primary">Loyalty</span></Heading>
        <Text as="p" className="text-center text-white mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button variant="ghost" size="large" className="mt-10" inverted>Learn More</Button>
      </div>
    </div>
  );
};