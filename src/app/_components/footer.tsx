import Image from "next/image";
import Royal from '../../../public/royal.png'
import Golden from '../../../public/golden.png'
import Premier from '../../../public/premier.png'
import Natural from '../../../public/natural.png'
import Whiskas from '../../../public/whiskas.png'
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { WhatsAppButton } from "./WhatsAppButton";

const brands = [
  { name: "Royal Canin", logo: Royal },
  { name: "Golden", logo: Golden },
  { name: "Premier ", logo: Premier },
  { name: "Natural ", logo: Natural },
  { name: "Whiskas ", logo: Whiskas },
  { name: "Golden ", logo: Golden },
]


export function Footer() {


  return (

    <section className="bg-[#E84C3E] py-16 text-white">
      <div className="container mx-auto px-4">

        <div className="border-b border-white/20 pb-8">
          <h4 className="text-white text-3xl mb-8 text-center font-bold">Marcas que trabalhamos</h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                className="bg-white p-4 rounded-lg flex items-center justify-center"
                key={index}
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={75}
                  style={{
                    width: 'auto',
                    height: 'auto'
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">PetShop Dev</h3>
            <p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação</p>


            <a href="#"
              className="bg-green-500 px-4 py-2 rounded-md">
              Contato via WhatsApp
            </a>

          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contato</h3>
            <p>Email: petshop@gmail.com</p>
            <p>Telefone: (48) XXXXX-XXXX</p>
            <p>Rua X, Centro, Criciúma | SC</p>

          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="#" target="_blank">
                <FacebookLogoIcon className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <InstagramLogoIcon className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <TwitterLogoIcon className="w-8 h-8" />
              </a>
            </div>

          </div>


        </footer>


      </div>

    </section>
  )

}