package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
	"strings"
)

type Assess struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAssess(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Assess {
	return &Assess{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccounts - Gets a list of accounts with account categories per statement period, specific to balance sheet
func (s *Assess) GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccounts(ctx context.Context, request operations.GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsRequest) (*operations.GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/reports/enhancedBalanceSheet/accounts", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDReportsEnhancedCashFlowTransactions - Gets a list of banking transactions and their categories.
func (s *Assess) GetCompaniesCompanyIDReportsEnhancedCashFlowTransactions(ctx context.Context, request operations.GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsRequest) (*operations.GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/reports/enhancedCashFlow/transactions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccounts - Gets a list of accounts with account categories per statement period, specific to profit and loss
func (s *Assess) GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccounts(ctx context.Context, request operations.GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsRequest) (*operations.GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/reports/enhancedProfitAndLoss/accounts", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement = out
		}
	}

	return res, nil
}

// GetDataAssessAccountsCategories - Gets a list of all the Codat standard categories.
func (s *Assess) GetDataAssessAccountsCategories(ctx context.Context, request operations.GetDataAssessAccountsCategoriesRequest) (*operations.GetDataAssessAccountsCategoriesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/data/assess/accounts/categories"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataAssessAccountsCategoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CodatAssessDataContractsAccountCategoriesAccountCategory
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsAccountCategoriesAccountCategories = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetails - Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.
func (s *Assess) GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetails(ctx context.Context, request operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsRequest) (*operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatus - Gets match status for a given company and datatype.
func (s *Assess) GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatus(ctx context.Context, request operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusRequest) (*operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/status", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataIntegrityContractsMetadataMatchMetadataResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataIntegrityContractsMetadataMatchMetadataResponse = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummaries - Gets match summary for a given company and datatype, optionally restricted by a Codat query string.
func (s *Assess) GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummaries(ctx context.Context, request operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesRequest) (*operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/summaries", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataIntegrityContractsSummaryMatchSummariesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataIntegrityContractsSummaryMatchSummariesResponse = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDAssessExcel - Returns the status of the latest report requested.
func (s *Assess) GetDataCompaniesCompanyIDAssessExcel(ctx context.Context, request operations.GetDataCompaniesCompanyIDAssessExcelRequest) (*operations.GetDataCompaniesCompanyIDAssessExcelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/assess/excel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDAssessExcelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPublicAPIModelsAssessAssessExcelMeta
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPublicAPIModelsAssessAssessExcelMeta = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketing - Gets the marketing metrics from an accounting source for a given company, over one or more periods of time.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketing(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategories - Get account categories (suggested and confirmed) for a company connection.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategories(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseModel = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategories - Gets the suggested and/or confirmed category for a specific account.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategories(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetention - Gets the customer retention metrics for a specific company connection, over one or more periods of time.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetention(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/customerRetention", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValue - Gets the lifetime value metric for a specific company connection, over one or more periods of time.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValue(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/lifetimeValue", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrders - Gets the order information for a specific company connection, over one or more periods of time.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrders(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefunds - Gets the refunds information for a specific company connection, over one or more periods of time.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefunds(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/refunds", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenue - Gets the revenue and revenue growth for a specific company connection, over one or more periods of time.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenue(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/revenue", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheet - Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheet(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLoss - Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLoss(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetrics - Gets all the available financial metrics for a given company, over one or more periods.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetrics(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrr - Gets key metrics for subscription revenue.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrr(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/mrr", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardReportingContractsReport
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardReportingContractsReport = out
		}
	}

	return res, nil
}

// GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcess - Gets key metrics for subscription revenue.
func (s *Assess) GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcess(ctx context.Context, request operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessRequest) (*operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/process", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategories - Updates the categories for all or a batch of accounts for a specific connection.
func (s *Assess) PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategories(ctx context.Context, request operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesRequest) (*operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsAccountCategoriesAccountCategoriesModels = out
		}
	}

	return res, nil
}

// PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategories - Updates or removes the confirmed category of a specific account.
func (s *Assess) PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategories(ctx context.Context, request operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesRequest) (*operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel = out
		}
	}

	return res, nil
}

// PostDataCompaniesCompanyIDAssessExcel - Request an Excel report for download.
func (s *Assess) PostDataCompaniesCompanyIDAssessExcel(ctx context.Context, request operations.PostDataCompaniesCompanyIDAssessExcelRequest) (*operations.PostDataCompaniesCompanyIDAssessExcelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/assess/excel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostDataCompaniesCompanyIDAssessExcelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPublicAPIModelsAssessAssessExcelMeta
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPublicAPIModelsAssessAssessExcelMeta = out
		}
	}

	return res, nil
}

// PostDataCompaniesCompanyIDAssessExcelDownload - Download the Excel report to a local drive.
func (s *Assess) PostDataCompaniesCompanyIDAssessExcelDownload(ctx context.Context, request operations.PostDataCompaniesCompanyIDAssessExcelDownloadRequest) (*operations.PostDataCompaniesCompanyIDAssessExcelDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/data/companies/{companyId}/assess/excel/download", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostDataCompaniesCompanyIDAssessExcelDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []byte
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostDataCompaniesCompanyIDAssessExcelDownload200ApplicationJSONBinaryString = out
		}
	}

	return res, nil
}
