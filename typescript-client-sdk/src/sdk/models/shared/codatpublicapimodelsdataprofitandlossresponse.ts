import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsProfitAndLossReport } from "./codatdatacontractsdatasetsprofitandlossreport";
import { CodatDataContractsDatasetsProfitAndLossReportingTypeEnum } from "./codatdatacontractsdatasetsprofitandlossreportingtypeenum";
import { Expose, Transform, Type } from "class-transformer";


export class CodatPublicApiModelsDataProfitAndLossResponse extends SpeakeasyBase {
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
  reportBasis: CodatDataContractsDatasetsProfitAndLossReportingTypeEnum;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsProfitAndLossReport })
  @Expose({ name: "reports" })
  @Type(() => CodatDataContractsDatasetsProfitAndLossReport)
  reports: CodatDataContractsDatasetsProfitAndLossReport[];
}