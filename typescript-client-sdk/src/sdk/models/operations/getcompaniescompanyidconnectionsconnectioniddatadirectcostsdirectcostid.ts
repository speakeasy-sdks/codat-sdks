import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directCostId" })
  directCostId: string;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdSecurity;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsDirectCost?: shared.CodatDataContractsDatasetsDirectCost;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
