import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsReportLine } from "./codatdatacontractsdatasetsreportline";


export class CodatDataContractsDatasetsBalanceSheet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=equity" })
  equity?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=liabilities" })
  liabilities?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=netAssets" })
  netAssets: number;
}