import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPullMessagesContractsValidationMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=logDateTimeUtc" })
  logDateTimeUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}