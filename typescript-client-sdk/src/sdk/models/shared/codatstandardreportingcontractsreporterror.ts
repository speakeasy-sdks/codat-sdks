import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatStandardReportingContractsReportErrorTypeEnum } from "./codatstandardreportingcontractsreporterrortypeenum";
import { Expose } from "class-transformer";


export class CodatStandardReportingContractsReportError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details?: Record<string, string[]>;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatStandardReportingContractsReportErrorTypeEnum;
}