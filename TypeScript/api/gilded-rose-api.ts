import { Item, GildedRose } from "../app/gilded-rose";

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

const firstProcessValue = parseInt(process.argv[2]);
const secondProcessValue = parseInt(process.argv[3]);

for(let i = 0; i < firstProcessValue; i++) {
    console.log(i);
}



