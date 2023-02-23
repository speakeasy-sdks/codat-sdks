import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceDisputeStatusEnum } from "./codatdatacontractsdatasetscommercedisputestatusenum";
import { CodatDataContractsDatasetsCommerceTransactionSourceRef } from "./codatdatacontractsdatasetscommercetransactionsourceref";


export class CodatDataContractsDatasetsCommerceDispute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=disputedTransactions", elemType: CodatDataContractsDatasetsCommerceTransactionSourceRef })
  disputedTransactions?: CodatDataContractsDatasetsCommerceTransactionSourceRef[];

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsCommerceDisputeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}