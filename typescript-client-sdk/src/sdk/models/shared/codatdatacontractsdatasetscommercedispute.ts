import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceDisputeStatusEnum } from "./codatdatacontractsdatasetscommercedisputestatusenum";
import { CodatDataContractsDatasetsCommerceTransactionSourceRef } from "./codatdatacontractsdatasetscommercetransactionsourceref";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceDispute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceTransactionSourceRef })
  @Expose({ name: "disputedTransactions" })
  @Type(() => CodatDataContractsDatasetsCommerceTransactionSourceRef)
  disputedTransactions?: CodatDataContractsDatasetsCommerceTransactionSourceRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: CodatDataContractsDatasetsCommerceDisputeStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}