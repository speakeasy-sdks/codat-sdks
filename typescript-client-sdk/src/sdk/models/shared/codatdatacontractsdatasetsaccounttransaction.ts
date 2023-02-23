import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";
import { CodatDataContractsDatasetsAccountTransactionLine } from "./codatdatacontractsdatasetsaccounttransactionline";
import { CodatDataContractsDatasetsAccountTransactionStatusEnum } from "./codatdatacontractsdatasetsaccounttransactionstatusenum";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";


export class CodatDataContractsDatasetsAccountTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccountRef" })
  bankAccountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: CodatDataContractsDatasetsAccountTransactionLine })
  lines?: CodatDataContractsDatasetsAccountTransactionLine[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsAccountTransactionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}