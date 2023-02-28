import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsJournalEntry } from "./codatdatacontractsdatasetsjournalentry";
import { CodatDataContractsPushPushOperationChange } from "./codatdatacontractspushpushoperationchange";
import { CodatDataContractsValidationValidationResult } from "./codatdatacontractsvalidationvalidationresult";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsJournalEntryPushOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsPushPushOperationChange })
  @Expose({ name: "changes" })
  @Type(() => CodatDataContractsPushPushOperationChange)
  changes?: CodatDataContractsPushPushOperationChange[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CodatDataContractsDatasetsJournalEntry)
  data?: CodatDataContractsDatasetsJournalEntry;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => CodatDataContractsValidationValidationResult)
  validation?: CodatDataContractsValidationValidationResult;
}