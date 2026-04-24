import Image from "next/image";
import AboutImg1 from '../../../public/about-1.png'
import AboutImg2 from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container px-4 mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image src={AboutImg1}
                alt="dog&cat"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300 " />


            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image src={AboutImg2}
                alt="orange-cat"
                quality={100}
                fill
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p>
              Até que alguém ame um animal, uma parte da sua alma permanece adormecida. Acreditamos nisso e acreditamos no fácil acesso a coisas que fazem bem à nossa mente, corpo e espírito. Com uma oferta inteligente, suporte excepcional e um processo de finalização de compra seguro, você está em boas mãos.
            </p>

            <ul className="space-y-4 ">

              <li className="flex items-center gap-2">
                <Check className="text-red-500 " />
                Aberto desde 2006
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-red-500 " />
                Equipe com mais de 10 veterinários
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>

            </ul>

            <div className="flex gap-2">

              <a href="https://wa.me/5548999990000?text=Olá, vim pelo site e gostaria de mais informações"
                target="_blank"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <WhatsAppButton />
                Contato via WhatsApp
              </a>

              <a href="https://maps.app.goo.gl/6aqPrtmCnjDRNJoT6"
                target="_blank"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}