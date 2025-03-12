import Layout from "@/components/Layout/layout";
import Image from "next/image";
import AboutImg from "../../../../public/images/aboutImg.jpg";

export default function About() {
  return (
    <>
      <Layout>
        <div className="mt-10 text-center">
          <h2 className="text-[20px] md:text-[28px] text-[#333334]">
            ABOUT US
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 px-5 md:px-10 py-3 md:py-10">
          <div className="w-full md:w-5/12 text-center">
            <h2 className="font-semibold text-[18px] md:text-[26px] mb-4">
              Our Vision
            </h2>
            <p className="py-2 text-black opacity-50">
              At La’gen, our vision is to empower individuals to express their
              unique sense of style through fashion. We believe that fashion is
              more than just clothing; it's a form of self-expression,
              confidence, and creativity. We strive to curate a diverse range of
              trendy and high-quality fashion products that inspire our
              customers to embrace their individuality and discover their
              personal style. Our goal is to create a fashion destination that
              caters to diverse tastes, body types, and lifestyles.
            </p>
            <p className="py-2 opacity-50">
              Through a seamless online shopping experience, exceptional
              customer service, and a passion for staying ahead of the latest
              fashion trends, we aim to become your go-to destination for all
              your fashion needs. We envision a community where everyone can
              find their fashion voice and feel empowered to express themselves
              with confidence.
            </p>
            <p className="py-2 opacity-50">
              Join us on this exciting fashion journey as we bring you the
              latest styles, trends, and fashion-forward pieces to help you
              embrace your unique style and make a statement wherever you go.
            </p>
            <p className="py-2 opacity-50">
              Welcome to La’gen, where fashion meets individuality.
            </p>
          </div>
          <div className="w-full md:w-6/12">
            <Image className="" src={AboutImg} alt="About Image" />
          </div>
        </div>
        <div className="px-5 md:px-10 py-3 md:py-10 text-center mt-5">
          <h2 className="text-[20px] md:text-[28px] text-[#333334]">
            OUR BRAND IDENTITY
          </h2>
          <p className="py-2 opacity-50">
            At La’gen, our brand identity is a vibrant tapestry woven from
            passion, innovation, and a deep understanding of our customers'
            desires. We are not just a fashion brand; we are a lifestyle that
            celebrates individuality, embraces self-expression, and empowers
            individuals to shine brightly. Our brand identity is built on three
            pillars: style, quality, and inclusivity. We are the epitome of
            style, offering fashion-forward designs that captivate attention and
            set trends. From timeless classics to bold statement pieces, our
            collections are carefully curated to cater to diverse tastes and
            preferences. Quality is the cornerstone of our brand. We are
            committed to delivering exceptional craftsmanship, using the finest
            materials, and ensuring attention to detail in every stitch. Our
            garments are made to last, offering durability and longevity that
            withstands the test of time.
          </p>
          <p className="py-2 opacity-50">
            Inclusivity is deeply ingrained in our brand identity. We celebrate
            diversity in all its forms, designing fashion that transcends
            boundaries and embraces individuals from different backgrounds,
            sizes, and cultures. Our goal is to create a fashion community that
            promotes inclusivity, fosters self-acceptance, and celebrates the
            beauty of every individual.
          </p>
          <p className="py-2 opacity-50">
            We are more than just a fashion brand; we are a movement that
            encourages individuals to embrace their unique identity and express
            themselves fearlessly. Our brand identity is a celebration of
            authenticity, encouraging individuals to showcase their true selves
            and find their voice through fashion.
          </p>
        </div>

        <div className="px-5 md:px-10 py-3 md:py-10 text-center mt-5">
          <h2 className="text-[20px] md:text-[28px] text-[#333334]">
            OUR BRAND PHILOSOPHY
          </h2>
          <p className="py-2 opacity-50">
            At La’gen, our design philosophy is rooted in the belief that
            fashion is an art form, a means of self-expression, and a powerful
            tool for empowerment. We strive to create fashion collections that
            captivate the senses, ignite creativity, and inspire confidence in
            individuals. Our design philosophy revolves around three core
            principles: innovation, authenticity, and versatility. We
            continuously push the boundaries of creativity and seek innovative
            ways to infuse our designs with fresh perspectives, unexpected
            details, and cutting-edge techniques. We believe that fashion should
            be a platform for experimentation, allowing individuals to explore
            their unique style and embrace their individuality.
          </p>
          <p className="py-2 opacity-50">
            Authenticity is at the heart of our design process. We believe in
            creating fashion that is true to our brand identity, reflective of
            our values, and resonates with our customers. Each piece is
            meticulously crafted with attention to detail, using high-quality
            materials and thoughtful craftsmanship. We aim to create garments
            that not only look beautiful but also feel comfortable, allowing
            individuals to express themselves effortlessly.
          </p>
          <p className="py-2 opacity-50">
            Versatility is an essential element of our design philosophy. We
            understand that fashion should adapt to the diverse lifestyles and
            occasions of our customers. Our collections are carefully curated to
            offer a range of styles that can seamlessly transition from day to
            night, from casual to formal, empowering individuals to express
            their personal style in any setting. We draw inspiration from
            various sources, including art, culture, nature, and the world
            around us. By infusing our designs with these influences, we create
            fashion that tells a story, sparks conversations, and evokes
            emotions. Our aim is to ignite a sense of wonder, curiosity, and
            self-discovery through our fashion creations.
          </p>
        </div>

        <div className="px-6 md:px-12 py-5 md:py-12 bg-black text-white text-[15px]">
          <p>
            "Mesmerizing, enchanting, and flawlessly executed, the latest
            collection from La’gen is an exquisite tapestry of sartorial
            artistry. With each piece, the designer weaves a narrative that
            transcends the realm of fashion and ventures into the realm of pure
            poetry. From the ethereal draping to the intricate embellishments,
            every detail is meticulously crafted to evoke a sense of wonder and
            leave the beholder spellbound...”
          </p>
          <p className="text-right text-[15px]">Lynn Yaeger</p>
        </div>
      </Layout>
    </>
  );
}
