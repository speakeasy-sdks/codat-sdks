import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatPullMessagesContractsMapMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logDateTimeUtc" })
  logDateTimeUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
