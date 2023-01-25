import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatPublicApiModelsClientsClientCompanyMetricsModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allTimeLinked" })
  allTimeLinked?: number;

  @SpeakeasyMetadata({ data: "json, name=currentlyLinked" })
  currentlyLinked?: number;

  @SpeakeasyMetadata({ data: "json, name=noLongerLinked" })
  noLongerLinked?: number;

  @SpeakeasyMetadata({ data: "json, name=notYetLinked" })
  notYetLinked?: number;
}
