import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsAccountsDataSource } from "./codatassessdatacontractscashflowtransactionsaccountsdatasource";
import { CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource } from "./codatassessdatacontractscashflowtransactionstransactionsdatasource";
import { CodatAssessDataContractsCommonPagedReportInfo } from "./codatassessdatacontractscommonpagedreportinfo";


export class CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: CodatAssessDataContractsCashFlowTransactionsAccountsDataSource })
  dataSources?: CodatAssessDataContractsCashFlowTransactionsAccountsDataSource[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: CodatAssessDataContractsCommonPagedReportInfo;

  @SpeakeasyMetadata({ data: "json, name=reportItems", elemType: CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource })
  reportItems?: CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource[];
}