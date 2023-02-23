import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsReportLine } from "./codatdatacontractsdatasetsreportline";


export class CodatDataContractsDatasetsProfitAndLossReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costOfSales" })
  costOfSales?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=expenses" })
  expenses?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=grossProfit" })
  grossProfit: number;

  @SpeakeasyMetadata({ data: "json, name=income" })
  income?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=netOperatingProfit" })
  netOperatingProfit: number;

  @SpeakeasyMetadata({ data: "json, name=netOtherIncome" })
  netOtherIncome: number;

  @SpeakeasyMetadata({ data: "json, name=netProfit" })
  netProfit: number;

  @SpeakeasyMetadata({ data: "json, name=otherExpenses" })
  otherExpenses?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=otherIncome" })
  otherIncome?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;
}