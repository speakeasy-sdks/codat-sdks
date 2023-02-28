import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsSourceTypeEnum } from "./codatassessdatacontractscashflowtransactionssourcetypeenum";
import { Expose } from "class-transformer";


export class CodatAssessDataContractsCashFlowTransactionsSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: CodatAssessDataContractsCashFlowTransactionsSourceTypeEnum;
}