import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceDiscountAllocation } from "./codatdatacontractsdatasetscommercediscountallocation";
import { CodatDataContractsDatasetsCommerceProductRef } from "./codatdatacontractsdatasetscommerceproductref";
import { CodatDataContractsDatasetsCommerceTaxComponentAllocation } from "./codatdatacontractsdatasetscommercetaxcomponentallocation";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceOrderLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceDiscountAllocation })
  @Expose({ name: "discountAllocations" })
  @Type(() => CodatDataContractsDatasetsCommerceDiscountAllocation)
  discountAllocations?: CodatDataContractsDatasetsCommerceDiscountAllocation[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "productRef" })
  @Type(() => CodatDataContractsDatasetsCommerceProductRef)
  productRef?: CodatDataContractsDatasetsCommerceProductRef;

  @SpeakeasyMetadata()
  @Expose({ name: "productVariantRef" })
  @Type(() => CodatDataContractsDatasetsCommerceProductRef)
  productVariantRef?: CodatDataContractsDatasetsCommerceProductRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceTaxComponentAllocation })
  @Expose({ name: "taxes" })
  @Type(() => CodatDataContractsDatasetsCommerceTaxComponentAllocation)
  taxes?: CodatDataContractsDatasetsCommerceTaxComponentAllocation[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}