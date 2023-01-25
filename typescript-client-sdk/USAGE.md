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
    codatLogin: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    companyId: "sit",
    connectionId: "voluptas",
  },
  queryParams: {
    orderBy: "culpa",
    page: 501233450539197794,
    pageSize: 3390393562759376202,
    query: "dolor",
  },
};

sdk.accountTransactions.getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactions(req).then((res: GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->