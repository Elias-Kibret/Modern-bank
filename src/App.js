import styles from "./style";
import { Navbar,Hero,Billing,Business,Stats} from "./components/index";

const App = () => (
  <div className="bg-primary w-full overflow-hidden h-[100vh]">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
     <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
    <Hero/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing/>
        <Business/>
        <Stats/>
      </div>
    </div>
  </div>
);

export default App;
