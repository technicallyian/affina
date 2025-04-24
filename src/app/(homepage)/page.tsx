import { Section } from '@/components/Section';
import { Hero } from './Hero';

export default function Home() {
  return (
    <>
      <Section className="container mx-auto">
        <Hero />
      </Section>

      <Section className="container mx-auto mt-20">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium erat id mauris faucibus, nec vestibulum erat molestie. Nullam sed maximus ipsum, vitae rhoncus dolor. Vivamus pulvinar neque eu mi vestibulum fermentum. Nullam scelerisque neque sit amet tempor suscipit. Maecenas eget posuere eros. Cras mattis justo et aliquet egestas. Nunc in mollis turpis, eu scelerisque ante. Donec mollis lacinia sem. Pellentesque malesuada scelerisque libero et posuere. Curabitur quis eleifend arcu, ut porttitor lacus. Pellentesque sed viverra elit, id efficitur lacus.</p>

        <p className="mt-10">Phasellus interdum sapien aliquet nulla molestie, sed mollis nulla dictum. Fusce ligula turpis, mollis vel vehicula a, tincidunt eu enim. Suspendisse tincidunt, ipsum maximus blandit tincidunt, lectus leo malesuada ipsum, non tristique nibh dolor vel quam. Pellentesque lorem ligula, porttitor pretium tellus eu, sollicitudin consectetur lectus. Suspendisse vestibulum quam vitae tortor iaculis rhoncus. Suspendisse tempor, erat et mattis suscipit, ex enim lobortis nisi, ut pharetra tortor nulla a nibh. Vivamus nec dolor vitae metus convallis pulvinar. Donec elementum lacus sit amet fermentum iaculis. Nunc volutpat bibendum vehicula. Morbi varius volutpat purus, ut pharetra quam. Donec lobortis cursus sapien nec vestibulum. Nunc vel turpis sagittis, convallis sem sed, lacinia tellus.</p>

        <p className="mt-10">Sed dapibus mi ut nibh laoreet, eget convallis nisi pharetra. Sed eu eleifend orci, et scelerisque sem. In dapibus, enim sodales laoreet aliquet, orci dolor sollicitudin est, et pulvinar enim felis vel nibh. Morbi eu tellus eu turpis egestas ullamcorper sit amet vitae arcu. Proin commodo urna quis tempus interdum. Mauris eget euismod leo, malesuada laoreet leo. Donec aliquam rhoncus tincidunt. Cras metus nisl, pulvinar posuere est scelerisque, viverra sagittis velit. Aenean id sem gravida, malesuada arcu at, fringilla nibh. Duis arcu lectus, eleifend non ultricies in, sodales eget felis. Fusce vitae mattis eros, in venenatis arcu.</p>
      </Section>
    </>
  );
}
