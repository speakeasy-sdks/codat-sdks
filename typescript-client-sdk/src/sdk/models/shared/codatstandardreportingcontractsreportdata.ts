import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatStandardReportingContractsIReportDataMeasure } from "./codatstandardreportingcontractsireportdatameasure";



export class CodatStandardReportingContractsReportData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: CodatStandardReportingContractsReportData })
  components?: CodatStandardReportingContractsReportData[];

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: number;

  @SpeakeasyMetadata({ data: "json, name=dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: number;

  @SpeakeasyMetadata({ data: "json, name=itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measures", elemType: CodatStandardReportingContractsIReportDataMeasure })
  measures?: CodatStandardReportingContractsIReportDataMeasure[];
}
