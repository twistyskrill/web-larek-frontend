import { ICard } from "../../types";
import { IEvents } from "../base/events";



export class CatalogModel {
    protected catalog: ICard[];
    protected preview: string | null;

    constructor(events: IEvents) {}

    getCatalog(): ICard[] {
        return this.catalog
    }

    setCatalog(catalog: ICard[]) {
        this.catalog = catalog
    }

    getCard(id: string) {
        return this.catalog.find(card => card.id === id)
    }

    setPreview(card: ICard) {
        this.preview = card.id
    }
}