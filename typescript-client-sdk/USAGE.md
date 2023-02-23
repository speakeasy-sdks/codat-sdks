<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@codatio/codat-ts";
import { GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRequest, GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsResponse } from "@codatio/codat-ts/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRequest = {
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    companyId: "unde",
    connectionId: "deserunt",
  },
  queryParams: {
    orderBy: "porro",
    page: 844266,
    pageSize: 602763,
    query: "vero",
  },
};

sdk.accountTransactions.getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactions(req).then((res: GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->