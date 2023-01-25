import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatStandardReportingContractsReportErrorTypeEnum } from "./codatstandardreportingcontractsreporterrortypeenum";



export class CodatStandardReportingContractsReportError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatStandardReportingContractsReportErrorTypeEnum;
}
