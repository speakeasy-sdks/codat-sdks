import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsSourceRef } from "./codatassessdatacontractscashflowtransactionssourceref";
import { CodatAssessDataContractsCashFlowTransactionsTransactionCategory } from "./codatassessdatacontractscashflowtransactionstransactioncategory";


export class CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceRef" })
  sourceRef?: CodatAssessDataContractsCashFlowTransactionsSourceRef;

  @SpeakeasyMetadata({ data: "json, name=transactionCategory" })
  transactionCategory?: CodatAssessDataContractsCashFlowTransactionsTransactionCategory;
}