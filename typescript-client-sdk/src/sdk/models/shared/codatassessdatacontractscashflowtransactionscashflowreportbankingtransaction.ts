import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsSourceRef } from "./codatassessdatacontractscashflowtransactionssourceref";
import { CodatAssessDataContractsCashFlowTransactionsTransactionCategory } from "./codatassessdatacontractscashflowtransactionstransactioncategory";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceRef" })
  @Type(() => CodatAssessDataContractsCashFlowTransactionsSourceRef)
  sourceRef?: CodatAssessDataContractsCashFlowTransactionsSourceRef;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionCategory" })
  @Type(() => CodatAssessDataContractsCashFlowTransactionsTransactionCategory)
  transactionCategory?: CodatAssessDataContractsCashFlowTransactionsTransactionCategory;
}