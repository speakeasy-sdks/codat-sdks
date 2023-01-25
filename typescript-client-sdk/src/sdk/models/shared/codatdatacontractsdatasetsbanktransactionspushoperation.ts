import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsPushPushOperationChange } from "./codatdatacontractspushpushoperationchange";
import { CodatDataContractsDatasetsBankTransactions } from "./codatdatacontractsdatasetsbanktransactions";
import { CodatDataContractsValidationValidationResult } from "./codatdatacontractsvalidationvalidationresult";



export class CodatDataContractsDatasetsBankTransactionsPushOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: CodatDataContractsPushPushOperationChange })
  changes?: CodatDataContractsPushPushOperationChange[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CodatDataContractsDatasetsBankTransactions;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata({ data: "json, name=requestedOnUtc" })
  requestedOnUtc: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: CodatDataContractsValidationValidationResult;
}
