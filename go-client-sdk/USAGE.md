<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk"
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKeyAuth: shared.SchemeAPIKeyAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            },
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsRequest{
        Security: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsPathParams{
            CompanyID: "unde",
            ConnectionID: "deserunt",
        },
        QueryParams: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsQueryParams{
            OrderBy: "porro",
            Page: 844266,
            PageSize: 602763,
            Query: "vero",
        },
    }

    ctx := context.Background()
    res, err := s.AccountTransactions.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CodatDataContractsDatasetsAccountTransactionPagedResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->