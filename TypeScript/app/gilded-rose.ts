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
  oldUpdateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
