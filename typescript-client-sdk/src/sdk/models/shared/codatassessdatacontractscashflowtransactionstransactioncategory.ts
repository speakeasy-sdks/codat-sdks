import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatAssessDataContractsCashFlowTransactionsTransactionCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=levels" })
  levels?: string[];
}
