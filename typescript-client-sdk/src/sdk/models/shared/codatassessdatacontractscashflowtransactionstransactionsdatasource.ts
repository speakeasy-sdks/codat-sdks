import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction } from "./codatassessdatacontractscashflowtransactionscashflowreportbankingtransaction";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction })
  @Expose({ name: "transactions" })
  @Type(() => CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction)
  transactions?: CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction[];
}