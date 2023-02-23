import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction } from "./codatassessdatacontractscashflowtransactionscashflowreportbankingtransaction";


export class CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction })
  transactions?: CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction[];
}