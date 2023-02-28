package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostDataCompaniesCompanyIDAssessExcelDownloadPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostDataCompaniesCompanyIDAssessExcelDownloadQueryParams struct {
	ReportType *string `queryParam:"style=form,explode=true,name=reportType"`
}

type PostDataCompaniesCompanyIDAssessExcelDownloadSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostDataCompaniesCompanyIDAssessExcelDownloadRequest struct {
	PathParams  PostDataCompaniesCompanyIDAssessExcelDownloadPathParams
	QueryParams PostDataCompaniesCompanyIDAssessExcelDownloadQueryParams
	Security    PostDataCompaniesCompanyIDAssessExcelDownloadSecurity
}

type PostDataCompaniesCompanyIDAssessExcelDownloadResponse struct {
	ContentType                                                                 string
	StatusCode                                                                  int
	PostDataCompaniesCompanyIDAssessExcelDownload200ApplicationJSONBinaryString []byte
}
