interface NEUItem {
  itemid: string;
  displayname: string;
  nbttag: string;
  damage: number;
  lore: string[];
  recipe?: {
    A1: string;
    A2: string;
    A3: string;
    B1: string;
    B2: string;
    B3: string;
    C1: string;
    C2: string;
    C3: string;
  };
  internalname: string;
  infotype: string;
  info?: string[];
  crafttext?: string;
}

interface Item {
  item: string;
  name: string;
  damage: number;
  lore: string[];
  crafttext?: string;
  nbt: string;
  recipe?: Array<string | null>;
}

import { promises as fs } from "fs";
import { join } from "path";

const DATA_DIR = join(__dirname, "NotEnoughUpdates-REPO/items");

fs.readdir(DATA_DIR).then(async (files) => {
  const allData = Object.fromEntries(
    await Promise.all(
      files.map(async (file) => {
        const item: NEUItem = JSON.parse(
          await fs.readFile(
            join(__dirname, "NotEnoughUpdates-REPO/items", file),
            "utf8"
          )
        );
        return [
          item.internalname,
          {
            name: item.displayname,
            damage: item.damage,
            item: item.itemid.toString(),
            lore: item.lore,
            nbt: item.nbttag,
            crafttext: item.crafttext,
            recipe:
              item.recipe === undefined
                ? undefined
                : [
                    item.recipe.A1,
                    item.recipe.A2,
                    item.recipe.A3,
                    item.recipe.B1,
                    item.recipe.B2,
                    item.recipe.B3,
                    item.recipe.C1,
                    item.recipe.C2,
                    item.recipe.C3,
                  ].map((ingredient) =>
                    ingredient === "" ? null : ingredient
                  ),
          } as Item,
        ] as const;
      })
    )
  );

  await fs.writeFile(join(__dirname, "data.json"), JSON.stringify(allData));
});
