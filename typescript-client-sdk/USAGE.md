<!-- Start SDK Example Usage -->
```typescript
import {
  GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRequest,
  GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsResponse 
} from "@codatio/codat-ts/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "@codatio/codat-ts";

const sdk = new SDK({
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
});
    
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