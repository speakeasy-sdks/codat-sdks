import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatStandardReportingContractsIDimension } from "./codatstandardreportingcontractsidimension";
import { CodatStandardReportingContractsMeasure } from "./codatstandardreportingcontractsmeasure";
import { CodatStandardReportingContractsReportData } from "./codatstandardreportingcontractsreportdata";
import { CodatStandardReportingContractsReportError } from "./codatstandardreportingcontractsreporterror";
import { Expose, Type } from "class-transformer";


export class CodatStandardReportingContractsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatStandardReportingContractsIDimension })
  @Expose({ name: "dimensions" })
  @Type(() => CodatStandardReportingContractsIDimension)
  dimensions?: CodatStandardReportingContractsIDimension[];

  @SpeakeasyMetadata({ elemType: CodatStandardReportingContractsReportError })
  @Expose({ name: "errors" })
  @Type(() => CodatStandardReportingContractsReportError)
  errors?: CodatStandardReportingContractsReportError[];

  @SpeakeasyMetadata({ elemType: CodatStandardReportingContractsMeasure })
  @Expose({ name: "measures" })
  @Type(() => CodatStandardReportingContractsMeasure)
  measures?: CodatStandardReportingContractsMeasure[];

  @SpeakeasyMetadata({ elemType: CodatStandardReportingContractsReportData })
  @Expose({ name: "reportData" })
  @Type(() => CodatStandardReportingContractsReportData)
  reportData?: CodatStandardReportingContractsReportData[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  reportInfo?: Record<string, string>;
}