import Helpers from "./helpers/common";
import {ActorFFG} from "./actors/actor-ffg";
import {ItemFFG} from "./items/item-ffg";
import {CombatFFG} from "./combat-ffg";

export {};

declare global {
  interface Game {
    ffg: any
  }

  interface CONFIG {
    FFG: any
    module: string
    logger: typeof Helpers.logger
  }

  namespace ClientSettings {
    interface Values {
      'starwarsffg.arraySkillList': string
      'starwarsffg.systemMigrationVersion': string
    }
  }

  interface DocumentClassConfig {
    Actor: typeof ActorFFG
    Item: typeof ItemFFG
    Combat: typeof CombatFFG
  }

  // TODO: Configure Actor and Item data properties
  interface CharacterDataProperties {
    type: any
    data: any
  }

  type ActorFFGDataProperties = CharacterDataProperties;

  interface DataConfig {
    Actor: ActorFFGDataProperties
  }
}