package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostDataCompaniesCompanyIDAssessExcelPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostDataCompaniesCompanyIDAssessExcelQueryParams struct {
	ReportType *string `queryParam:"style=form,explode=true,name=reportType"`
}

type PostDataCompaniesCompanyIDAssessExcelSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostDataCompaniesCompanyIDAssessExcelRequest struct {
	PathParams  PostDataCompaniesCompanyIDAssessExcelPathParams
	QueryParams PostDataCompaniesCompanyIDAssessExcelQueryParams
	Security    PostDataCompaniesCompanyIDAssessExcelSecurity
}

type PostDataCompaniesCompanyIDAssessExcelResponse struct {
	CodatPublicAPIModelsAssessAssessExcelMeta *shared.CodatPublicAPIModelsAssessAssessExcelMeta
	ContentType                               string
	StatusCode                                int
}
