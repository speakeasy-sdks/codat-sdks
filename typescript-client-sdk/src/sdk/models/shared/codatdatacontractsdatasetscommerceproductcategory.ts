import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceAncestorRef } from "./codatdatacontractsdatasetscommerceancestorref";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceProductCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceAncestorRef })
  @Expose({ name: "ancestorRefs" })
  @Type(() => CodatDataContractsDatasetsCommerceAncestorRef)
  ancestorRefs?: CodatDataContractsDatasetsCommerceAncestorRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}