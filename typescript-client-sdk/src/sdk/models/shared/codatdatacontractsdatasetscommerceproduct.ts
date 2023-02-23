import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProductCategoryRef } from "./codatdatacontractsdatasetscommerceproductcategoryref";
import { CodatDataContractsDatasetsCommerceProductStatusEnum } from "./codatdatacontractsdatasetscommerceproductstatusenum";
import { CodatDataContractsDatasetsCommerceProductVariant } from "./codatdatacontractsdatasetscommerceproductvariant";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";


export class CodatDataContractsDatasetsCommerceProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categorization" })
  categorization?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isGiftCard" })
  isGiftCard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productCategoryRefs", elemType: CodatDataContractsDatasetsCommerceProductCategoryRef })
  productCategoryRefs?: CodatDataContractsDatasetsCommerceProductCategoryRef[];

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsCommerceProductStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=variants", elemType: CodatDataContractsDatasetsCommerceProductVariant })
  variants?: CodatDataContractsDatasetsCommerceProductVariant[];
}