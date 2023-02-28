import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsReportLine } from "./codatdatacontractsdatasetsreportline";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCashFlowStatement extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cashPayments" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  cashPayments?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "cashReceipts" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  cashReceipts?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}