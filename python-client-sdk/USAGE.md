<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
   
req = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsRequest(
    security=operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsSecurity(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsPathParams(
        company_id="unde",
        connection_id="deserunt",
    ),
    query_params=operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsQueryParams(
        order_by="porro",
        page=844266,
        page_size=602763,
        query="vero",
    ),
)
    
res = s.account_transactions.get_companies_company_id_connections_connection_id_data_account_transactions(req)

if res.codat_data_contracts_datasets_account_transaction_paged_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->