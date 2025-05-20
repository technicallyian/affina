import { Heading } from '@/components/typography';
import { DemoForm } from '@/components/demo-form';

export default function GetADemoPage() {
  return (
    <div className="container mx-auto px-4 py-40">
      <Heading level={1} className="text-center">Get a <span className="text-primary">Demo</span></Heading>

      <div className="max-w-2xl mx-auto mt-8">
        <DemoForm />
      </div>
    </div>
  );
} 