import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatStandardReportingContractsIDimensionItem } from "./codatstandardreportingcontractsidimensionitem";



export class CodatStandardReportingContractsIDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CodatStandardReportingContractsIDimensionItem })
  items?: CodatStandardReportingContractsIDimensionItem[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
