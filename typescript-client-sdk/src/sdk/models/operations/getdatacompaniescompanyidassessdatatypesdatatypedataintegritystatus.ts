import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusPathParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusSecurity;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataIntegrityContractsMetadataMatchMetadataResponse?: shared.CodatDataIntegrityContractsMetadataMatchMetadataResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}