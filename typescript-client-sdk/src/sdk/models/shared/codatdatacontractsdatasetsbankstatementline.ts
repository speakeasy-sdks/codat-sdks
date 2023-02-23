import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsTransactionTypeEnum } from "./codatdatacontractsdatasetstransactiontypeenum";


export class CodatDataContractsDatasetsBankStatementLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=counterparty" })
  counterparty?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reconciled" })
  reconciled: boolean;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionType" })
  transactionType: CodatDataContractsDatasetsTransactionTypeEnum;
}