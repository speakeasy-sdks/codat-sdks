import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsTrackingCategoryStatusEnum } from "./codatdatacontractsdatasetstrackingcategorystatusenum";
import { Expose, Transform, Type } from "class-transformer";


export class CodatPublicApiModelsDataTrackingCategoryTree extends SpeakeasyBase {
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
  @Expose({ name: "parentId" })
  parentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: CodatDataContractsDatasetsTrackingCategoryStatusEnum;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsDataTrackingCategoryTree })
  @Expose({ name: "subCategories" })
  @Type(() => CodatPublicApiModelsDataTrackingCategoryTree)
  subCategories?: CodatPublicApiModelsDataTrackingCategoryTree[];
}