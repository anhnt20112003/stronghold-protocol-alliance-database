import { operators as season1operators } from "../data/season1/operators.json";
import { operators as season2operators } from "../data/season2/operators.json";
import { operators as season21operators } from "../data/season2.1/operators.json";

import { bondInfo as season1bonds } from "../data/season1/alliances.json";
import { bondInfo as season2bonds } from "../data/season2/alliances.json";
import { bondInfo as season21bonds } from "../data/season2.1/alliances.json";

import { shopitems as season1items } from "../data/season1/items.json";
import { shopitems as season2items } from "../data/season2/items.json";
import { shopitems as season21items } from "../data/season2.1/items.json";

import { bandInfo as season1bands } from "../data/season1/strategies.json";
import { bandInfo as season2bands } from "../data/season2/strategies.json";
import { bandInfo as season21bands } from "../data/season2.1/strategies.json";

export function getOperatorsBySeason(season: string) {
  switch (season) {
    case "1": {
      return season1operators;
    }
    case "2": {
      return season2operators;
    }
    case "2.1": {
      return season21operators;
    }
    default: {
      return season1operators;
    }
  }
}

export function getAlliancesBySeason(season: string) {
  switch (season) {
    case "1": {
      return season1bonds;
    }
    case "2": {
      return season2bonds;
    }
    case "2.1": {
      return season21bonds;
    }
    default: {
      return season1bonds;
    }
  }
}

export function getItemsBySeason(season: string) {
  switch (season) {
    case "1": {
      return season1items;
    }
    case "2": {
      return season2items;
    }
    case "2.1": {
      return season21items;
    }
    default: {
      return season1items;
    }
  }
}

export function getStrategiesBySeason(season: string) {
  switch (season) {
    case "1": {
      return season1bands;
    }
    case "2": {
      return season2bands;
    }
    case "2.1": {
      return season21bands;
    }
    default: {
      return season1bands;
    }
  }
}
