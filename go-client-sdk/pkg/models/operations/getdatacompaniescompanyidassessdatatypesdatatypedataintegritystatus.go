package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	DataType  string `pathParam:"style=simple,explode=false,name=dataType"`
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusRequest struct {
	PathParams GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusPathParams
	Security   GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusSecurity
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusResponse struct {
	CodatDataIntegrityContractsMetadataMatchMetadataResponse *shared.CodatDataIntegrityContractsMetadataMatchMetadataResponse
	ContentType                                              string
	StatusCode                                               int
}
