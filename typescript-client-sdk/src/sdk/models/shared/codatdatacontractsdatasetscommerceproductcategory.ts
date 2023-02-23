import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceAncestorRef } from "./codatdatacontractsdatasetscommerceancestorref";


export class CodatDataContractsDatasetsCommerceProductCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestorRefs", elemType: CodatDataContractsDatasetsCommerceAncestorRef })
  ancestorRefs?: CodatDataContractsDatasetsCommerceAncestorRef[];

  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;
}