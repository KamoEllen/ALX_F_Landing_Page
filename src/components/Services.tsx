import Image from "next/image";

const services = [
  {
    title: "Create Your Avatar",
    description:
      "Create your own avatar by customizing details such as height, body shape, and skin tone through our user-friendly interface, ensuring a realistic and personalized representation.",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "Try On Clothes Virtually",
    description:
      "Browse through a curated selection of clothing items from top online stores. See how they fit and look on your avatar in real-time. No more guesswork—shop smarter with virtual try-ons.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Explore Brands You Love",
    description:
      "Easily explore and shop your favorite brands, from new trends to trusted favorites.",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">How It Works</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
