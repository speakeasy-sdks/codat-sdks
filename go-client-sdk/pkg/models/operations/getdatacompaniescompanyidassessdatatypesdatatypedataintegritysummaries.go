package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	DataType  string `pathParam:"style=simple,explode=false,name=dataType"`
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesQueryParams struct {
	Query *string `queryParam:"style=form,explode=true,name=query"`
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesRequest struct {
	PathParams  GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesPathParams
	QueryParams GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesQueryParams
	Security    GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesSecurity
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesResponse struct {
	CodatDataIntegrityContractsSummaryMatchSummariesResponse *shared.CodatDataIntegrityContractsSummaryMatchSummariesResponse
	ContentType                                              string
	StatusCode                                               int64
}
