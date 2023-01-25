import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatStandardReportingContractsMeasure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}
