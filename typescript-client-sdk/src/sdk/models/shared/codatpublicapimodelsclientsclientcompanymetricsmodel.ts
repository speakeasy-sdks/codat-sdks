import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsClientsClientCompanyMetricsModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allTimeLinked" })
  allTimeLinked?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currentlyLinked" })
  currentlyLinked?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "noLongerLinked" })
  noLongerLinked?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "notYetLinked" })
  notYetLinked?: number;
}