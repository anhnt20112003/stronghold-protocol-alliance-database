export function getBondImage(type: string) {
  const table: Record<string, string> = {
    Arcane: "arcaneship",
    Aid: "deputship",
    Ægir: "egirship",
    "Assist Operator": "emptyship",
    Resilient: "indomship",
    Investor: "investship",
    Kazimierz: "kazimierzship",
    Kjerag: "kjeragship",
    Laterano: "lateranoship",
    Harmony: "maniship",
    Marvel: "miraship",
    Precision: "preciship",
    Raid: "raidship",
    Sargon: "sargonship",
    Siracusa: "siracusaship",
    Agile: "skillfulship",
    Solo: "soloship",
    Durable: "steadship",
    Elite: "suntship",
    Swift: "swiftship",
    Victoria: "victoriaship",
    Foresight: "visiship",
    Yan: "yanship",
  };
  // return `https://github.com/ArknightsAssets/ArknightsAssets2/blob/cn/assets/dyn/ui/autochess/%5Buc%5Dautochesscommon/arts/bondicon/icon_${table[type]}.png?raw=true`;
  return `/bondicons/icon_${table[type]}.png`;
}
