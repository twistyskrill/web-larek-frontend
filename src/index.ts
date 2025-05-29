import { EventEmitter } from './components/base/events';
import { BusketModel } from './components/model/BusketModel';
import { CatalogModel } from './components/model/CatalogModel';
import { UserDataModel } from './components/model/UserDataModel';
import './scss/styles.scss';


const cards = [
    {
            "id": "854cef69-976d-4c2a-a18c-2aa45046c390",
            "description": "Если планируете решать задачи в тренажёре, берите два.",
            "image": "/5_Dots.svg",
            "title": "+1 час в сутках",
            "category": "софт-скил",
            "price": 750
        },
        {
            "id": "c101ab44-ed99-4a54-990d-47aa2bb4e7d9",
            "description": "Лизните этот леденец, чтобы мгновенно запоминать и узнавать любой цветовой код CSS.",
            "image": "/Shell.svg",
            "title": "HEX-леденец",
            "category": "другое",
            "price": 1450
        },
        {
            "id": "b06cde61-912f-4663-9751-09956c0eed67",
            "description": "Будет стоять над душой и не давать прокрастинировать.",
            "image": "/Asterisk_2.svg",
            "title": "Мамка-таймер",
            "category": "софт-скил",
            "price": null
        }
]

const events = new EventEmitter();

const catalogModel = new CatalogModel(events);
const busketModel = new BusketModel(events);
const userDataModel = new UserDataModel(events);

//устанавливаем каталог
catalogModel.setCatalog(cards);

//тест модели корзины
busketModel.addItem(cards[1])
busketModel.addItem(cards[0])
console.log(busketModel.getItems())
console.log(busketModel.getTotalPrice())
console.log(busketModel.isEmpty())
busketModel.removeItem("c101ab44-ed99-4a54-990d-47aa2bb4e7d9")
console.log(busketModel.getItems())
busketModel.clearBusket()
console.log(busketModel.getItems())

userDataModel.setOrderData({phone: '987'})
console.log(userDataModel.getOrderData())


