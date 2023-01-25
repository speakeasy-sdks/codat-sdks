import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsTrackingCategoryStatusEnum } from "./codatdatacontractsdatasetstrackingcategorystatusenum";



export class CodatPublicApiModelsDataTrackingCategoryTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsTrackingCategoryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subCategories", elemType: CodatPublicApiModelsDataTrackingCategoryTree })
  subCategories?: CodatPublicApiModelsDataTrackingCategoryTree[];
}
