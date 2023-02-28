import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsReportLine } from "./codatdatacontractsdatasetsreportline";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsProfitAndLossReport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "costOfSales" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  costOfSales?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "expenses" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  expenses?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "grossProfit" })
  grossProfit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "income" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  income?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "netOperatingProfit" })
  netOperatingProfit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "netOtherIncome" })
  netOtherIncome: number;

  @SpeakeasyMetadata()
  @Expose({ name: "netProfit" })
  netProfit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "otherExpenses" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  otherExpenses?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "otherIncome" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  otherIncome?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}