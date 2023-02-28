import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatPublicApiModelsCompanyCompanyEventStreamItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "eventTimeUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  eventTimeUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}