import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsReportLine } from "./codatdatacontractsdatasetsreportline";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsBalanceSheet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "assets" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  assets?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "equity" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  equity?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "liabilities" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  liabilities?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "netAssets" })
  netAssets: number;
}