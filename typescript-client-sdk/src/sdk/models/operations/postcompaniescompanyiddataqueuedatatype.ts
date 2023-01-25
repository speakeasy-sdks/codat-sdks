import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompaniesCompanyIdDataQueueDataTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: string;
}


export class PostCompaniesCompanyIdDataQueueDataTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionId" })
  connectionId?: string;
}


export class PostCompaniesCompanyIdDataQueueDataTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostCompaniesCompanyIdDataQueueDataTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdDataQueueDataTypePathParams;

  @SpeakeasyMetadata()
  queryParams: PostCompaniesCompanyIdDataQueueDataTypeQueryParams;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdDataQueueDataTypeSecurity;
}


export class PostCompaniesCompanyIdDataQueueDataTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsDataDataSet?: shared.CodatPublicApiModelsDataDataSet;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
