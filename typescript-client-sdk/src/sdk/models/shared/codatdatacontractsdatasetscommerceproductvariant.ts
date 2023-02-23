import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceInventory } from "./codatdatacontractsdatasetscommerceinventory";
import { CodatDataContractsDatasetsCommerceProductVariantPrice } from "./codatdatacontractsdatasetscommerceproductvariantprice";


export class CodatDataContractsDatasetsCommerceProductVariant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: CodatDataContractsDatasetsCommerceInventory;

  @SpeakeasyMetadata({ data: "json, name=isTaxEnabled" })
  isTaxEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: CodatDataContractsDatasetsCommerceProductVariantPrice })
  prices?: CodatDataContractsDatasetsCommerceProductVariantPrice[];

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=shippingRequired" })
  shippingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=unitOfMeasure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=vatPercentage" })
  vatPercentage?: number;
}