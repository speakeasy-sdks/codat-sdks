import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProductCategoryRef } from "./codatdatacontractsdatasetscommerceproductcategoryref";
import { CodatDataContractsDatasetsCommerceProductStatusEnum } from "./codatdatacontractsdatasetscommerceproductstatusenum";
import { CodatDataContractsDatasetsCommerceProductVariant } from "./codatdatacontractsdatasetscommerceproductvariant";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceProduct extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "categorization" })
  categorization?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isGiftCard" })
  isGiftCard?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceProductCategoryRef })
  @Expose({ name: "productCategoryRefs" })
  @Type(() => CodatDataContractsDatasetsCommerceProductCategoryRef)
  productCategoryRefs?: CodatDataContractsDatasetsCommerceProductCategoryRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: CodatDataContractsDatasetsCommerceProductStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CodatDataContractsDatasetsDataInterfacesSupplementalData)
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceProductVariant })
  @Expose({ name: "variants" })
  @Type(() => CodatDataContractsDatasetsCommerceProductVariant)
  variants?: CodatDataContractsDatasetsCommerceProductVariant[];
}