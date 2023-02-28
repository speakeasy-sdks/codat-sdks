import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceInventory } from "./codatdatacontractsdatasetscommerceinventory";
import { CodatDataContractsDatasetsCommerceProductVariantPrice } from "./codatdatacontractsdatasetscommerceproductvariantprice";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceProductVariant extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "barcode" })
  barcode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inventory" })
  @Type(() => CodatDataContractsDatasetsCommerceInventory)
  inventory?: CodatDataContractsDatasetsCommerceInventory;

  @SpeakeasyMetadata()
  @Expose({ name: "isTaxEnabled" })
  isTaxEnabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceProductVariantPrice })
  @Expose({ name: "prices" })
  @Type(() => CodatDataContractsDatasetsCommerceProductVariantPrice)
  prices?: CodatDataContractsDatasetsCommerceProductVariantPrice[];

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "shippingRequired" })
  shippingRequired?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unitOfMeasure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "vatPercentage" })
  vatPercentage?: number;
}