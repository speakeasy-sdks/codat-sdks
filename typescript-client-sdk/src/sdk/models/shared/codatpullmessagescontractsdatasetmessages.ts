import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPullMessagesContractsFetchMessage } from "./codatpullmessagescontractsfetchmessage";
import { CodatPullMessagesContractsMapMessage } from "./codatpullmessagescontractsmapmessage";
import { CodatPullMessagesContractsValidationMessage } from "./codatpullmessagescontractsvalidationmessage";



export class CodatPullMessagesContractsDatasetMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fetch", elemType: CodatPullMessagesContractsFetchMessage })
  fetch?: CodatPullMessagesContractsFetchMessage[];

  @SpeakeasyMetadata({ data: "json, name=map", elemType: CodatPullMessagesContractsMapMessage })
  map?: CodatPullMessagesContractsMapMessage[];

  @SpeakeasyMetadata({ data: "json, name=validation", elemType: CodatPullMessagesContractsValidationMessage })
  validation?: CodatPullMessagesContractsValidationMessage[];
}
