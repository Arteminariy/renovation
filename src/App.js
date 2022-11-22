import React, { useState } from "react";
import './styles/App.css'
import './styles/Service.css'
import Service from "./components/Service";
import Footer from "./components/Footer";
import AboutList from "./components/AboutList";
import Popup from "./components/Popup";
import RenovationPhoto from "./photo/Ремонт задний фон.jpg"
import DesignPhoto from "./photo/Кафе.png"
import DeliverPhoto from "./photo/рабочий прикол.jpg"
import ClearingPhoto from "./photo/клиринг.jpg"
import Review from "./components/Review";
import OrderBox from "./components/Orders/OrderBox";
import CallUsForm from "./components/CallUsForm";



function App() {
  const PriceList = {
    Cosmetic: "9999",
    Second: "9999",
    First: "9999",
    Kee: "9999"
  }
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
            <Service service = {{
            name: "Ремонт",
            description: `Ремонт любой сложности: от косметичского до дизайнерского`,
            photo: RenovationPhoto,
            altphoto: "Фото ремонта",
            price: PriceList.Cosmetic
          }}/>
          <Service service = {{
            name: "Дизайн-проект",
            description: `Разработка дизайна любой сложности`,
            photo: DesignPhoto,
            altphoto: "Фото дизайн-проекта",
            price: PriceList.Second
          }}/>
          <Service service = {{
            name: "Доставка стройматериалов на объект",
            description: `Используем сертифицированные материалы`,
            photo: DeliverPhoto,
            altphoto: "Фото доставки",
            price: PriceList.First
          }}/>
          <Service service = {{
            name: "Уборка объекта после ремонта",
            description: `Специалисты уберут помещение качественными материалами`,
            photo: ClearingPhoto,
            altphoto: "Фото Ремонта под ключ",
            price: PriceList.Kee
          }}/>
          </div>
        </div>
        <div className="serviceTitle"><h2>О нас</h2></div>
        <div className="aboutBlock">
          <AboutList 
          // employees = {{title: "Наши сотрудники:", employeeList: [
          //   {
          //     name: "Нодир",
          //     exp: "10",
          //     post: "Бригадир",
          //     pic: EmployeePhoto_1
          //   },
          //   {
          //     name: "Владимир",
          //     exp: "15",
          //     post: "Сантехник",
          //     pic: EmployeePhoto_1
          //   }
          // ]}} 
          />
        </div>
        <div className="serviceTitle"><h2>Заказать</h2></div>
          <OrderBox popup={setPopup}/>
        <div className="serviceTitle"><h2>Отзывы</h2></div>
        <div className="reviewBox">
          <Review review = {
            {
              link: "https://profi.ru/profile/RazumovNK",
              author: "Наталия",
              text: `Капитальный ремонт в "сталинке", 50м2.
              Этот ремонт не первый в моей жизни и есть с кем сравнивать.
              
              Я очень долго искала исполнителей, пообщалась, как минимум, с 15 бригадирами.
              Нодирбек профессионал высокого класса.
              
              В старом жилом фонде много нюансов вскрывается во время ремонта. Из самых, казалось бы, тупиковых ситуаций, Нодирбек всегда находил выход.
              У него не только умелые руки, но и, что важно, прекрасно работает голова, наполненная различными лайфхаками.
              
              Также он хороший менеджер, с грамотно подобранной и организованной командой профессионалов.
              
              Помог мне правильно подобрать материалы, не переплачивать лишний раз, вышло довольно экономно.
              Может сам всё закупить и доставить на площадку.
              
              Ремонт длился 3,5 месяца, это со стенами под покраску, гипсокартоном на потолке, сооружением антресоли, тёплыми полами, заменой всех коммуникаций...
              
              Кто делал ремонт знает на сколько это энергозатратное мероприятие.
              Вроде ремонт закончен, но многое ещё нужно приводить в порядок.
              
              Впечатлило как Нодирбек отчищал мои батареи, в которых многое скопилось за долгие годы эксплуатации. Я бы сама не сообразила их так тщательно чистить.
              
              Спасибо огромное Нодирбеку и его ребятам за грамотно сделанную непростую работу и просто человеческое отношение.
              
              РЕКОМЕНДУЮ`
            }
          }/>
          <Review review = {
            {
              link: "https://profi.ru/profile/RazumovNK",
              author: "Лидия Евгеньевна",
              text: `Думаю, что все знают, какое тяжелое мероприятие - ремонт квартиры. Так вот с Нодирбеком мы этого не почувствовали. Прежде всего, он сам настоящий профессионал, и его команда очень умелые ребята. В процессе ремонта Нодирбек давал нам дельные рекомендации, а его команда качественно их выполняла. Все ребята очень вежливые, уважительные, аккуратные. Все необходимые расходные материалы Нодирбек по согласованию с нами закупал и привозил сам, а мы только оплачивали чек. В общем, ремонт не доставил заранее ожидаемых негативных впечатлений. Если вы хотите получить качественный и быстрый ремонт - смело обращайтесь к Нодирбеку.`
            }
          }/>
          <Review review = {
            {
              link: "https://profi.ru/profile/RazumovNK",
              author: "Лилия",
              text: `Работа выполнена, квартиры отремонтированы "под ключ". Горячо рекомендую данного исполнителя, все сделано с хорошим качеством и в оговоренные сроки. Что весьма важно - цена выполнения работ невысокая, а исполнение отличное. Ещё хотелось отметить немаловажные мелочи - мастер не ленится сам ездить доставлять товар при необходимости, менять, сдавать купленные излишки. Так же помогает вносить товар, выносит мусор без отдельной таксы. Советует бюджетные материалы, даёт также дельные советы по разным общестроительным, сантехническим, электромонтажным работам.`
            }
          }/>
          <Review review = {
            {
              link: "https://profi.ru/profile/RazumovNK",
              author: "Тамара",
              text: `Спасибо большое ребятам за работу! Интеллигентные, культурные и аккуратные! Нужно было исправить ошибки предыдущего "мастера" по ремонту, зашпаклевать и покрасить стены, квартира 46кв,сделали все аккуратно и в короткие сроки! С материалом обходились бережно, что не хватало докупали сами, за что отдельное спасибо, тк ездить за ним самой времени нет! Обязательно буду рекомендовать и обращусь сама! Успехов вам!`
            }
          }/>
        </div>
        <a href="https://profi.ru/profile/RazumovNK" className="profiLink" target="_blank" rel="noreferrer"><button className="moreReview"><p>Смотреть больше отзывов</p></button></a>
      </div>
      
      <Footer contacts = {{
        number: "+79858286383",
        email: "nnborisova5@yandex.ru"
      }}/>

      <Popup active={popup} setActive={setPopup}>
        <CallUsForm/>
      </Popup>
      <div className="bgi"></div>
    </div>
  );
}

export default App;
