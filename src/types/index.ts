export interface ICard {
    id: string;
    category: string;
    title: string;
    description: string;
    price: number | null;
    image: string;
}

export interface IForm {
    payment: string;
    address: string;
    email: string;
    phone: string;
    total: number;
    items: string[]
}
