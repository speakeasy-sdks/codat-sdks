import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}