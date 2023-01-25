import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePaymentMethodRef } from "./codatdatacontractsdatasetscommercepaymentmethodref";
import { CodatDataContractsDatasetsCommercePaymentStatusEnum } from "./codatdatacontractsdatasetscommercepaymentstatusenum";



export class CodatDataContractsDatasetsCommercePayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodRef" })
  paymentMethodRef?: CodatDataContractsDatasetsCommercePaymentMethodRef;

  @SpeakeasyMetadata({ data: "json, name=paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsCommercePaymentStatusEnum;
}
