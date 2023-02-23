import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsSourceRef } from "./codatassessdatacontractscashflowtransactionssourceref";


export class CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountProvider" })
  accountProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currentBalance" })
  currentBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceRef" })
  sourceRef?: CodatAssessDataContractsCashFlowTransactionsSourceRef;
}