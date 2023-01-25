import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceDiscountAllocation } from "./codatdatacontractsdatasetscommercediscountallocation";
import { CodatDataContractsDatasetsCommerceProductRef } from "./codatdatacontractsdatasetscommerceproductref";
import { CodatDataContractsDatasetsCommerceTaxComponentAllocation } from "./codatdatacontractsdatasetscommercetaxcomponentallocation";



export class CodatDataContractsDatasetsCommerceOrderLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountAllocations", elemType: CodatDataContractsDatasetsCommerceDiscountAllocation })
  discountAllocations?: CodatDataContractsDatasetsCommerceDiscountAllocation[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=productRef" })
  productRef?: CodatDataContractsDatasetsCommerceProductRef;

  @SpeakeasyMetadata({ data: "json, name=productVariantRef" })
  productVariantRef?: CodatDataContractsDatasetsCommerceProductRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=taxes", elemType: CodatDataContractsDatasetsCommerceTaxComponentAllocation })
  taxes?: CodatDataContractsDatasetsCommerceTaxComponentAllocation[];

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}
