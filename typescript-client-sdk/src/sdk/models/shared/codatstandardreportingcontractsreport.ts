import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatStandardReportingContractsIDimension } from "./codatstandardreportingcontractsidimension";
import { CodatStandardReportingContractsMeasure } from "./codatstandardreportingcontractsmeasure";
import { CodatStandardReportingContractsReportData } from "./codatstandardreportingcontractsreportdata";
import { CodatStandardReportingContractsReportError } from "./codatstandardreportingcontractsreporterror";


export class CodatStandardReportingContractsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: CodatStandardReportingContractsIDimension })
  dimensions?: CodatStandardReportingContractsIDimension[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CodatStandardReportingContractsReportError })
  errors?: CodatStandardReportingContractsReportError[];

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: CodatStandardReportingContractsMeasure })
  measures?: CodatStandardReportingContractsMeasure[];

  @SpeakeasyMetadata({ data: "json, name=reportData", elemType: CodatStandardReportingContractsReportData })
  reportData?: CodatStandardReportingContractsReportData[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: Record<string, string>;
}