import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsAccountsDataSource } from "./codatassessdatacontractscashflowtransactionsaccountsdatasource";
import { CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource } from "./codatassessdatacontractscashflowtransactionstransactionsdatasource";
import { CodatAssessDataContractsCommonPagedReportInfo } from "./codatassessdatacontractscommonpagedreportinfo";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsCashFlowTransactionsAccountsDataSource })
  @Expose({ name: "dataSources" })
  @Type(() => CodatAssessDataContractsCashFlowTransactionsAccountsDataSource)
  dataSources?: CodatAssessDataContractsCashFlowTransactionsAccountsDataSource[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => CodatAssessDataContractsCommonPagedReportInfo)
  reportInfo?: CodatAssessDataContractsCommonPagedReportInfo;

  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource })
  @Expose({ name: "reportItems" })
  @Type(() => CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource)
  reportItems?: CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource[];
}