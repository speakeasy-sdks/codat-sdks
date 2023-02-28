import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatPullMessagesContractsMapMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "logDateTimeUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  logDateTimeUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "logLevel" })
  logLevel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}