import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatAssessDataContractsAccountCategoriesAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detailType" })
  detailType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailTypeDescription" })
  detailTypeDescription?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailTypeDisplayName" })
  detailTypeDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subtypeDisplayName" })
  subtypeDisplayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}