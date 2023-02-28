import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatStandardReportingContractsIReportDataMeasure } from "./codatstandardreportingcontractsireportdatameasure";
import { Expose, Type } from "class-transformer";


export class CodatStandardReportingContractsReportData extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatStandardReportingContractsReportData })
  @Expose({ name: "components" })
  @Type(() => CodatStandardReportingContractsReportData)
  components?: CodatStandardReportingContractsReportData[];

  @SpeakeasyMetadata()
  @Expose({ name: "dimension" })
  dimension?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dimensionDisplayName" })
  dimensionDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  item?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "itemDisplayName" })
  itemDisplayName?: string;

  @SpeakeasyMetadata({ elemType: CodatStandardReportingContractsIReportDataMeasure })
  @Expose({ name: "measures" })
  @Type(() => CodatStandardReportingContractsIReportDataMeasure)
  measures?: CodatStandardReportingContractsIReportDataMeasure[];
}