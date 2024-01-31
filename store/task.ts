import { createStore, createEvent } from "effector";

export const $card = createStore([]);

export const addCard = createEvent();

$card.on(addCard, (cards, item) => [...cards, item]);