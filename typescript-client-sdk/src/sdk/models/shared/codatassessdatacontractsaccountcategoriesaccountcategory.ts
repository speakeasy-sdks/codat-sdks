import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatAssessDataContractsAccountCategoriesAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailType" })
  detailType?: string;

  @SpeakeasyMetadata({ data: "json, name=detailTypeDescription" })
  detailTypeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=detailTypeDisplayName" })
  detailTypeDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=subtypeDisplayName" })
  subtypeDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}