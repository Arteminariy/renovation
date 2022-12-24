import React, { useState } from "react";
import './styles/App.css'
import './styles/Service.css'
import Service from "./components/Service";
import Footer from "./components/Footer";
import AboutList from "./components/AboutList";
import Popup from "./components/Popup";
import Review from "./components/Review";
import OrderBox from "./components/OrderBox";
import CallUsForm from "./components/CallUsForm";

import { services, reviews } from "./db";

function App() {
	const [popup, setPopup] = useState(false)
	return (
		<div className="App">
			<header>
				<div>
					<h1>Ремонт и отделка квартир любой сложности</h1>
				</div>
			</header>
			<div className="main">
				<div className="serviceTitle"><h2>Наши услуги</h2></div>
				<div className="services">
					<div className="servicesBox">
						{services.map(el => {
							return (
								<Service service={el} />
							)
						})}
					</div>
				</div>
				<div className="serviceTitle"><h2>О нас</h2></div>
				<div className="aboutBlock">
					<AboutList />
				</div>
				<div className="serviceTitle"><h2>Заказать</h2></div>
				<OrderBox popup={setPopup} />
				<div className="serviceTitle"><h2>Отзывы</h2></div>
				<div className="reviewBox">
					{reviews.map(el => {
						return (
							<Review review={el} />
						)
					})}
				</div>
				<a href="https://profi.ru/profile/RazumovNK" className="profiLink" target="_blank" rel="noreferrer"><button className="moreReview"><p>Смотреть больше отзывов</p></button></a>
			</div>

			<Footer contacts={{
				number: "+79858286383",
				email: "nodirrazumov@gmail.com"
			}} />

			<Popup active={popup} setActive={setPopup}>
				<CallUsForm popup={setPopup} />
			</Popup>
			<div className="bgi"></div>
		</div>
	);
}

export default App;
