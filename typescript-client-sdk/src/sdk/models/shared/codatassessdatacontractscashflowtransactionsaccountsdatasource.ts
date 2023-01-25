import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount } from "./codatassessdatacontractscashflowtransactionscashflowreportbankingaccount";



export class CodatAssessDataContractsCashFlowTransactionsAccountsDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount })
  accounts?: CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount[];
}
