package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetDataCompaniesCompanyIDAssessExcelPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetDataCompaniesCompanyIDAssessExcelQueryParams struct {
	ReportType *string `queryParam:"style=form,explode=true,name=reportType"`
}

type GetDataCompaniesCompanyIDAssessExcelSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDAssessExcelRequest struct {
	PathParams  GetDataCompaniesCompanyIDAssessExcelPathParams
	QueryParams GetDataCompaniesCompanyIDAssessExcelQueryParams
	Security    GetDataCompaniesCompanyIDAssessExcelSecurity
}

type GetDataCompaniesCompanyIDAssessExcelResponse struct {
	CodatPublicAPIModelsAssessAssessExcelMeta *shared.CodatPublicAPIModelsAssessAssessExcelMeta
	ContentType                               string
	StatusCode                                int
}
