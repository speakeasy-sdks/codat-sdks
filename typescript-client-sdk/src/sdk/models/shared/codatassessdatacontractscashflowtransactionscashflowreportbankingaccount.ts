import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsCashFlowTransactionsSourceRef } from "./codatassessdatacontractscashflowtransactionssourceref";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountProvider" })
  accountProvider?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currentBalance" })
  currentBalance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "platformName" })
  platformName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceRef" })
  @Type(() => CodatAssessDataContractsCashFlowTransactionsSourceRef)
  sourceRef?: CodatAssessDataContractsCashFlowTransactionsSourceRef;
}