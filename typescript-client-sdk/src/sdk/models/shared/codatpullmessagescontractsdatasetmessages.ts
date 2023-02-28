import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPullMessagesContractsFetchMessage } from "./codatpullmessagescontractsfetchmessage";
import { CodatPullMessagesContractsMapMessage } from "./codatpullmessagescontractsmapmessage";
import { CodatPullMessagesContractsValidationMessage } from "./codatpullmessagescontractsvalidationmessage";
import { Expose, Type } from "class-transformer";


export class CodatPullMessagesContractsDatasetMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatPullMessagesContractsFetchMessage })
  @Expose({ name: "fetch" })
  @Type(() => CodatPullMessagesContractsFetchMessage)
  fetch?: CodatPullMessagesContractsFetchMessage[];

  @SpeakeasyMetadata({ elemType: CodatPullMessagesContractsMapMessage })
  @Expose({ name: "map" })
  @Type(() => CodatPullMessagesContractsMapMessage)
  map?: CodatPullMessagesContractsMapMessage[];

  @SpeakeasyMetadata({ elemType: CodatPullMessagesContractsValidationMessage })
  @Expose({ name: "validation" })
  @Type(() => CodatPullMessagesContractsValidationMessage)
  validation?: CodatPullMessagesContractsValidationMessage[];
}