package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type BankingTransactionCategories struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBankingTransactionCategories(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BankingTransactionCategories {
	return &BankingTransactionCategories{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategories - Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction
// activity.
func (s *BankingTransactionCategories) GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategories(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryID - Gets a specified bank transaction category for a given company
func (s *BankingTransactionCategories) GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryID(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories/{transactionCategoryId}", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankingTransactionCategory
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankingTransactionCategory = out
		}
	}

	return res, nil
}
