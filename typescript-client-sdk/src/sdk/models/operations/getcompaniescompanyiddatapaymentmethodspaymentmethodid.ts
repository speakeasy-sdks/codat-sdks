import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentMethodId" })
  paymentMethodId: string;
}


export class GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdSecurity;
}


export class GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsPaymentMethod?: shared.CodatDataContractsDatasetsPaymentMethod;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
