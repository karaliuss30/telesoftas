import fetch from 'node-fetch';
import { Item, GildedRose } from "../app/gilded-rose";
import YesNoDto from './Interfaces/YesNoDto';
import * as fs from 'fs';
const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new Item("Aged Brie", 2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Item("Sulfuras, Hand of Ragnaros", 3, 70), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 13, 25),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20),
    new Item("Conjured Mana Cake", 3, 6),
  ];

const gildedRose = new GildedRose(items);

const logFile = 'log.txt';
const apiUrl = 'https://yesno.wtf/api';

const firstProcessValue: number = parseInt(process.argv[2]);
const secondProcessValue: number = parseInt(process.argv[3]);

for (let i = 0; i < firstProcessValue; i ++) {
  callApi(secondProcessValue);
  gildedRose.updateQuality();
  console.log(gildedRose.items)
}

async function callApi(numberOfCalls: number) {
  if (numberOfCalls === 0) {
    return;
  }
  const newCallsNumber = await Promise.all([...Array(numberOfCalls)].map(async() => await fetchResponse()))
  .then(responses => responses.filter(response => response?.answer === 'yes').length);
  console.log(newCallsNumber);
  await callApi(newCallsNumber);
  
}

async function fetchResponse(): Promise<YesNoDto | undefined> {
  try {
    const response: YesNoDto = await fetch(apiUrl).then(response => response.json())
    return response;
  } catch(err) {  // undefined block
    console.error(err);
    return;
  }
}

