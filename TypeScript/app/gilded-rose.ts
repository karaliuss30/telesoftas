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
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      switch (true) {
        case /Sulfuras, Hand of Ragnaros/.test(item.name):
          break;

        case /Backstage passes to a TAFKAL80ETC concert/.test(item.name):
          this.updateQualityForBackstageItem(item);
          break;

        case /Aged Brie/.test(item.name):
          this.updateQualityForAgedBrieItem(item);
          break;

        case /Conjured/.test(item.name):
          this.updateQualityForConjuredItem(item);
          break;

        default:
          this.updateQualityForDefaultItem(item);
          break;
      }
    });
    return this.items;
  }

  updateQualityForAgedBrieItem(item: Item) {
    if (item.sellIn > 0) {
      item.quality += 1;
    } else {
      item.quality += 2;
    }

    if (item.quality > 50) {
      item.quality = 50;
    }
    item.sellIn -= 1;
  }

  updateQualityForBackstageItem(item: Item) {
    if (item.sellIn >= 11) {
      item.quality += 1;
    } else if (item.sellIn >= 6 && item.sellIn < 11) {
      item.quality += 2;
    } else if (item.sellIn >= 1 && item.sellIn < 6) {
      item.quality += 3;
    } else if (item.sellIn < 1) {
      item.quality = 0;
    }
    if (item.quality > 50) {
      item.quality = 50;
    }
    item.sellIn -= 1;
  }

  updateQualityForDefaultItem(item: Item) {
    if (item.sellIn > 0 && item.quality > 0) {
      item.quality -= 1;
    } else if (item.sellIn <= 0 && item.quality > 0) {
      item.quality -= 2;
    }

    if (item.quality < 0) {
      item.quality = 0;
    }
    item.sellIn -= 1;
  }

  updateQualityForConjuredItem(item: Item) {
    if (item.sellIn > 0 && item.quality > 0) {
      item.quality -= 2;
    } else if (item.sellIn <= 0 && item.quality > 0) {
      item.quality -= 4;
    }
    if (item.quality < 0) {
      item.quality = 0;
    }
    item.sellIn -= 1;
  }
}
