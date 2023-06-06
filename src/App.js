import styles from "./style";
import {
	Navbar,
	Hero,
	Billing,
	Business,
	Stats,
	CardDeal,
	Testimonials,
	Footer,
	Contact,
} from "./components/index";
import { BrowserRouter } from "react-router-dom";
const App = () => (
	<BrowserRouter basename="/">
		<div className="bg-primary w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<Testimonials />
					<CardDeal />
					<Contact />
					<Footer />
				</div>
			</div>
		</div>
	</BrowserRouter>
);

export default App;
