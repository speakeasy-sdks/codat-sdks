import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPublicApiModelsCompanyCompanyEventStreamItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=eventTimeUtc" })
  eventTimeUtc: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}