import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount } from "./codatassessdatacontractscashflowtransactionscashflowreportbankingaccount";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsCashFlowTransactionsAccountsDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount })
  @Expose({ name: "accounts" })
  @Type(() => CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount)
  accounts?: CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount[];
}