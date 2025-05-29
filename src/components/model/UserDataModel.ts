import { IForm } from "../../types";
import { IEvents } from "../base/events";


export class UserDataModel {

    protected orderData: IForm = {
        payment: '',
        address: '',
        email: '',
        phone: '',
        total: 0,
        items: [],
    };

    constructor (events: IEvents) {}

    setOrderData(data: Partial<IForm>): void {
        this.orderData = {
            ...this.orderData,
            ...data
        }
    }

    getOrderData(): IForm {
        return this.orderData
    }

    resetOrder(): void {
        this.orderData = {
            payment: '',
            address: '',
            email: '',
            phone: '',
            total: 0,
            items: [],
        }
    }
}