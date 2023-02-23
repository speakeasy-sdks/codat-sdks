import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatStandardReportingContractsIReportDataMeasure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=measureDisplayName" })
  measureDisplayName?: string;
}