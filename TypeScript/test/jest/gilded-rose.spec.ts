import { Item, GildedRose } from "../../app/gilded-rose";

test("tests update for aged brie switch case after 3 days", () => {
  const agedBrieAfter3Days = new Item("Aged Brie", -1, 4);
  const items = [new Item("Aged Brie", 2, 0)];

  const gildedRose = new GildedRose(items);
  for (let i = 0; i < 3; i++) {
    gildedRose.updateQuality();
  }

  expect(gildedRose.items[0]).toEqual(agedBrieAfter3Days);
});

test("tests update for sulfuras items switch cases after 30 days", () => {
  const items = [
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  ];
  const gildedRose = new GildedRose(items);
  for (let i = 0; i < 30; i++) {
    gildedRose.updateQuality();
  }

  expect(gildedRose.items[0]).toEqual(items[0]);
  expect(gildedRose.items[1]).toEqual(items[1]);
});

test("tests update to backstage passes after 5 days", () => {
  const backstagePass1After5Days = new Item(
    "Backstage passes to a TAFKAL80ETC concert",
    5,
    40
  );
  const backstagePass2After5Days = new Item(
    "Backstage passes to a TAFKAL80ETC concert",
    -2,
    0
  );
  const backstagePass3After5Days = new Item(
    "Backstage passes to a TAFKAL80ETC concert",
    -4,
    0
  );

  const items = [
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),
    new Item("Backstage passes to a TAFKAL80ETC concert", 3, 48),
    new Item("Backstage passes to a TAFKAL80ETC concert", 1, 25),
  ];

  const gildedRose = new GildedRose(items);
  for (let i = 0; i < 5; i++) {
    gildedRose.updateQuality();
  }

  expect(gildedRose.items[0]).toEqual(backstagePass1After5Days);
  expect(gildedRose.items[1]).toEqual(backstagePass2After5Days);
  expect(gildedRose.items[2]).toEqual(backstagePass3After5Days);
});

test("tests new updateItems() vs old updateItems() after 1 day", () => {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new Item("Aged Brie", 2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  ];
  const gildedRose = new GildedRose(items);
  expect(gildedRose.oldUpdateQuality()).toEqual(gildedRose.updateQuality());
});

test("tests new updateItems() vs old updateItems() after 5 days", () => {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new Item("Aged Brie", 2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  ];
  const gildedRoseOld = new GildedRose(items);
  const gildedRoseNew = new GildedRose(items);

  for (let i = 0; i < 5; i++) {
    gildedRoseOld.oldUpdateQuality();
    gildedRoseNew.updateQuality();
  }

  expect(gildedRoseOld.items).toEqual(gildedRoseNew.items);
});
