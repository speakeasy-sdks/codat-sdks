import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsAccountsDataSource } from "./codatassessdatacontractscashflowtransactionsaccountsdatasource";
import { CodatAssessDataContractsCommonPagedReportInfo } from "./codatassessdatacontractscommonpagedreportinfo";
import { CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource } from "./codatassessdatacontractscashflowtransactionstransactionsdatasource";



export class CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: CodatAssessDataContractsCashFlowTransactionsAccountsDataSource })
  dataSources?: CodatAssessDataContractsCashFlowTransactionsAccountsDataSource[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: CodatAssessDataContractsCommonPagedReportInfo;

  @SpeakeasyMetadata({ data: "json, name=reportItems", elemType: CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource })
  reportItems?: CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource[];
}
