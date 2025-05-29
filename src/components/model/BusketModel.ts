import { ICard } from "../../types";
import { IEvents } from "../base/events";



export class BusketModel {
    protected items: ICard[] = [];
    protected total: number = 0

    constructor (events: IEvents) {}

    addItem(card: ICard): void {
        this.items.push(card)
    }

    removeItem(cardId: string): void {
        this.items = this.items.filter(card => card.id !== cardId)
    }

    getItems(): ICard[] {
        return this.items
    }

    getTotalPrice(): number {
        this.items.forEach((card) => {
            this.total += card.price
        })
        return this.total
    }

    clearBusket(): void {
        this.items = []
    }

    isEmpty(): boolean {
        return this.items.length > 0 ? false : true
    }
}