import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCashFlowStatementReportingBasisEnum } from "./codatdatacontractsdatasetscashflowstatementreportingbasisenum";
import { CodatDataContractsDatasetsCashFlowStatementReportingDataEnum } from "./codatdatacontractsdatasetscashflowstatementreportingdataenum";
import { CodatDataContractsDatasetsCashFlowStatement } from "./codatdatacontractsdatasetscashflowstatement";



export class CodatPublicApiModelsDataCashFlowStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=earliestAvailableMonth" })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=mostRecentAvailableMonth" })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportBasis" })
  reportBasis: CodatDataContractsDatasetsCashFlowStatementReportingBasisEnum;

  @SpeakeasyMetadata({ data: "json, name=reportInput" })
  reportInput: CodatDataContractsDatasetsCashFlowStatementReportingDataEnum;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: CodatDataContractsDatasetsCashFlowStatement })
  reports: CodatDataContractsDatasetsCashFlowStatement[];
}
