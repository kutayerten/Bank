import { card } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () =>(
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>Find a better card deal <br className="sm:block hidden" /> in few easy steps with kTy Bank</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <Button styles="mt-10" />
      </div>
    

    <div className={layout.sectionImg}>

    <img src={card} alt="card" className="w-[100%] h-[100%]" />
    
    </div>
    </section>
  )

export default CardDeal