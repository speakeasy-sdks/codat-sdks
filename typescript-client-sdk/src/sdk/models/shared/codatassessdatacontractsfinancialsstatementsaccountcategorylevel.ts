import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=levelName" })
  levelName?: string;
}
