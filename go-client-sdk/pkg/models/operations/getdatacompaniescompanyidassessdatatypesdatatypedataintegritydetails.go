package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	DataType  string `pathParam:"style=simple,explode=false,name=dataType"`
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     *int32  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsRequest struct {
	PathParams  GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsPathParams
	QueryParams GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsQueryParams
	Security    GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsSecurity
}

type GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsResponse struct {
	CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse *shared.CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse
	ContentType                                                       string
	StatusCode                                                        int64
}
