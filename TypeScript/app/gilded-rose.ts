export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  static items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    items = items;
  }
  updateQuality() {
    GildedRose.items.forEach((item) => {
      switch (true) {
        case /Sulfuras, Hand of Ragnaros/.test(item.name):
          break;

        case /Backstage passes to a TAFKAL80ETC concert/.test(item.name):
          this.updateQualityForBackstageItem(item);

        case /Aged Brie/.test(item.name):
          this.updateQualityForAgedBrieItem(item);

        case /Conjured/.test(item.name):
          this.updateQualityForConjuredItem(item);

        default:
          this.updateQualityForDefaultItem(item);
      }
    });
    return GildedRose.items;
  }

  updateQualityForAgedBrieItem(item: Item) {}

  updateQualityForBackstageItem(item: Item) {}

  updateQualityForDefaultItem(item: Item) {}

  updateQualityForConjuredItem(item: Item) {}
}
