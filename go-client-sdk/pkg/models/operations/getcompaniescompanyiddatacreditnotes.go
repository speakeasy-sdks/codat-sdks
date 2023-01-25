package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataCreditNotesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataCreditNotesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataCreditNotesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataCreditNotesRequest struct {
	PathParams  GetCompaniesCompanyIDDataCreditNotesPathParams
	QueryParams GetCompaniesCompanyIDDataCreditNotesQueryParams
	Security    GetCompaniesCompanyIDDataCreditNotesSecurity
}

type GetCompaniesCompanyIDDataCreditNotesResponse struct {
	CodatDataContractsDatasetsCreditNotePagedResponseModel *shared.CodatDataContractsDatasetsCreditNotePagedResponseModel
	ContentType                                            string
	StatusCode                                             int64
}
