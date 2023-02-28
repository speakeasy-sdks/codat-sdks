import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceCustomerRef } from "./codatdatacontractsdatasetscommercecustomerref";
import { CodatDataContractsDatasetsCommerceLocationRef } from "./codatdatacontractsdatasetscommercelocationref";
import { CodatDataContractsDatasetsCommerceOrderLineItem } from "./codatdatacontractsdatasetscommerceorderlineitem";
import { CodatDataContractsDatasetsCommercePaymentRef } from "./codatdatacontractsdatasetscommercepaymentref";
import { CodatDataContractsDatasetsCommerceServiceCharge } from "./codatdatacontractsdatasetscommerceservicecharge";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceOrder extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "closedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  closedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => CodatDataContractsDatasetsCommerceCustomerRef)
  customerRef?: CodatDataContractsDatasetsCommerceCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "locationRef" })
  @Type(() => CodatDataContractsDatasetsCommerceLocationRef)
  locationRef?: CodatDataContractsDatasetsCommerceLocationRef;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceOrderLineItem })
  @Expose({ name: "orderLineItems" })
  @Type(() => CodatDataContractsDatasetsCommerceOrderLineItem)
  orderLineItems?: CodatDataContractsDatasetsCommerceOrderLineItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommercePaymentRef })
  @Expose({ name: "payments" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentRef)
  payments?: CodatDataContractsDatasetsCommercePaymentRef[];

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceServiceCharge })
  @Expose({ name: "serviceCharges" })
  @Type(() => CodatDataContractsDatasetsCommerceServiceCharge)
  serviceCharges?: CodatDataContractsDatasetsCommerceServiceCharge[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CodatDataContractsDatasetsDataInterfacesSupplementalData)
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalGratuity" })
  totalGratuity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalRefund" })
  totalRefund?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}