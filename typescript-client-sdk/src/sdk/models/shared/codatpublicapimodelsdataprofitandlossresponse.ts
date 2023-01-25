import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsProfitAndLossReportingTypeEnum } from "./codatdatacontractsdatasetsprofitandlossreportingtypeenum";
import { CodatDataContractsDatasetsProfitAndLossReport } from "./codatdatacontractsdatasetsprofitandlossreport";



export class CodatPublicApiModelsDataProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=earliestAvailableMonth" })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=mostRecentAvailableMonth" })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportBasis" })
  reportBasis: CodatDataContractsDatasetsProfitAndLossReportingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: CodatDataContractsDatasetsProfitAndLossReport })
  reports: CodatDataContractsDatasetsProfitAndLossReport[];
}
