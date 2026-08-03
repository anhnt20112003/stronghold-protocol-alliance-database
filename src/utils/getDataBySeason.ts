import { operators as allianceSeason1operators } from "../data/alliance/season1/operators.json";
import { operators as allianceSeason2operators } from "../data/alliance/season2/operators.json";
import { operators as allianceSeason21operators } from "../data/alliance/season2.1/operators.json";

import { bondInfo as allianceSeason1bonds } from "../data/alliance/season1/alliances.json";
import { bondInfo as allianceSeason2bonds } from "../data/alliance/season2/alliances.json";
import { bondInfo as allianceSeason21bonds } from "../data/alliance/season2.1/alliances.json";

import { shopitems as allianceSeason1items } from "../data/alliance/season1/items.json";
import { shopitems as allianceSeason2items } from "../data/alliance/season2/items.json";
import { shopitems as allianceSeason21items } from "../data/alliance/season2.1/items.json";

import { bandInfo as allianceSeason1bands } from "../data/alliance/season1/strategies.json";
import { bandInfo as allianeSeason2bands } from "../data/alliance/season2/strategies.json";
import { bandInfo as allianceSeason21bands } from "../data/alliance/season2.1/strategies.json";

export function getOperatorsBySeason(season: string) {
  switch (season) {
    case "1": {
      return allianceSeason1operators;
    }
    case "2": {
      return allianceSeason2operators;
    }
    case "2.1": {
      return allianceSeason21operators;
    }
    default: {
      return allianceSeason1operators;
    }
  }
}

export function getAlliancesBySeason(season: string) {
  switch (season) {
    case "1": {
      return allianceSeason1bonds;
    }
    case "2": {
      return allianceSeason2bonds;
    }
    case "2.1": {
      return allianceSeason21bonds;
    }
    default: {
      return allianceSeason1bonds;
    }
  }
}

export function getItemsBySeason(season: string) {
  switch (season) {
    case "1": {
      return allianceSeason1items;
    }
    case "2": {
      return allianceSeason2items;
    }
    case "2.1": {
      return allianceSeason21items;
    }
    default: {
      return allianceSeason1items;
    }
  }
}

export function getStrategiesBySeason(season: string) {
  switch (season) {
    case "1": {
      return allianceSeason1bands;
    }
    case "2": {
      return allianeSeason2bands;
    }
    case "2.1": {
      return allianceSeason21bands;
    }
    default: {
      return allianceSeason1bands;
    }
  }
}
