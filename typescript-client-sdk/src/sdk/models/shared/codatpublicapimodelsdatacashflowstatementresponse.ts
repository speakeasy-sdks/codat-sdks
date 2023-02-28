import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCashFlowStatement } from "./codatdatacontractsdatasetscashflowstatement";
import { CodatDataContractsDatasetsCashFlowStatementReportingBasisEnum } from "./codatdatacontractsdatasetscashflowstatementreportingbasisenum";
import { CodatDataContractsDatasetsCashFlowStatementReportingDataEnum } from "./codatdatacontractsdatasetscashflowstatementreportingdataenum";
import { Expose, Transform, Type } from "class-transformer";


export class CodatPublicApiModelsDataCashFlowStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "earliestAvailableMonth" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "mostRecentAvailableMonth" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reportBasis" })
  reportBasis: CodatDataContractsDatasetsCashFlowStatementReportingBasisEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "reportInput" })
  reportInput: CodatDataContractsDatasetsCashFlowStatementReportingDataEnum;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCashFlowStatement })
  @Expose({ name: "reports" })
  @Type(() => CodatDataContractsDatasetsCashFlowStatement)
  reports: CodatDataContractsDatasetsCashFlowStatement[];
}