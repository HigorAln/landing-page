import { Carts } from "./carts";
import { Verify } from "./verify";


export function CartsComponents(){
  return(
    <>
      <Carts button="Get Started" title="Basic" price="$8">
        <Verify>
          20 themes
        </Verify>
        <Verify>
          60 music files
        </Verify>
        <Verify>
          80 audios effects
        </Verify>
        <Verify>
          8 language support
        </Verify>
        <Verify>
          Email Support
        </Verify>
      </Carts>

      <Carts button="Get Started" title="All Rounder" price="$12" active>
        <Verify>
          150 themes
        </Verify>
        <Verify>
          320 music files
        </Verify>
        <Verify>
          500 audio effect
        </Verify>
        <Verify>
          80+ language support
        </Verify>
        <Verify>
          24/7 Support
        </Verify>
      </Carts>

      <Carts 
        button="Contact Us" 
        title="Super Hero" 
        info="Get in touch with us to discuss on your requirements and pricing."
        perProject={false}
      >
        <Verify>
          150 themes
        </Verify>
        <Verify>
          320 music files
        </Verify>
        <Verify>
          500 audio effect
        </Verify>
        <Verify>
          80+ language support
        </Verify>
        <Verify>
          24/7 Support
        </Verify>
      </Carts>
    </>
  )
}