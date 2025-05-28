interface ICard {
    id: string;
    category: string;
    title: string;
    description: string;
    price: number | null;
    image: string;
}

interface IForm {
    payment: string;
    address: string;
    email: string;
    phone: number;
    total: number;
    items: string[]
}
