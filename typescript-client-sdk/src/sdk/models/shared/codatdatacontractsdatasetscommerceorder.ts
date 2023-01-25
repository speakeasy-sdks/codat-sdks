import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceCustomerRef } from "./codatdatacontractsdatasetscommercecustomerref";
import { CodatDataContractsDatasetsCommerceLocationRef } from "./codatdatacontractsdatasetscommercelocationref";
import { CodatDataContractsDatasetsCommerceOrderLineItem } from "./codatdatacontractsdatasetscommerceorderlineitem";
import { CodatDataContractsDatasetsCommercePaymentRef } from "./codatdatacontractsdatasetscommercepaymentref";
import { CodatDataContractsDatasetsCommerceServiceCharge } from "./codatdatacontractsdatasetscommerceservicecharge";



export class CodatDataContractsDatasetsCommerceOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closedDate" })
  closedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: CodatDataContractsDatasetsCommerceCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locationRef" })
  locationRef?: CodatDataContractsDatasetsCommerceLocationRef;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: CodatDataContractsDatasetsCommerceOrderLineItem })
  orderLineItems?: CodatDataContractsDatasetsCommerceOrderLineItem[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: CodatDataContractsDatasetsCommercePaymentRef })
  payments?: CodatDataContractsDatasetsCommercePaymentRef[];

  @SpeakeasyMetadata({ data: "json, name=serviceCharges", elemType: CodatDataContractsDatasetsCommerceServiceCharge })
  serviceCharges?: CodatDataContractsDatasetsCommerceServiceCharge[];

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalGratuity" })
  totalGratuity?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRefund" })
  totalRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}
