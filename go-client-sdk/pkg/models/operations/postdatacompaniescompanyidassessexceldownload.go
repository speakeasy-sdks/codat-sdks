package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostDataCompaniesCompanyIDAssessExcelDownloadPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostDataCompaniesCompanyIDAssessExcelDownloadQueryParams struct {
	ReportType *string `queryParam:"style=form,explode=true,name=reportType"`
}

type PostDataCompaniesCompanyIDAssessExcelDownloadSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDataCompaniesCompanyIDAssessExcelDownloadRequest struct {
	PathParams  PostDataCompaniesCompanyIDAssessExcelDownloadPathParams
	QueryParams PostDataCompaniesCompanyIDAssessExcelDownloadQueryParams
	Security    PostDataCompaniesCompanyIDAssessExcelDownloadSecurity
}

type PostDataCompaniesCompanyIDAssessExcelDownloadResponse struct {
	ContentType                                                                 string
	StatusCode                                                                  int64
	PostDataCompaniesCompanyIDAssessExcelDownload200ApplicationJSONBinaryString []byte
}
