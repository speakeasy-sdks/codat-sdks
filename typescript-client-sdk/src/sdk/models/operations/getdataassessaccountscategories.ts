import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetDataAssessAccountsCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetDataAssessAccountsCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetDataAssessAccountsCategoriesSecurity;
}

export class GetDataAssessAccountsCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CodatAssessDataContractsAccountCategoriesAccountCategory })
  codatAssessDataContractsAccountCategoriesAccountCategories?: shared.CodatAssessDataContractsAccountCategoriesAccountCategory[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}