import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesDisputeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=disputeId" })
  disputeId: string;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesDisputeIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesDisputeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesDisputeIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesDisputeIdSecurity;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesDisputeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsCommerceDispute?: shared.CodatDataContractsDatasetsCommerceDispute;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
