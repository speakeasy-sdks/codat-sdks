import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsDataAccountStatusResponseEnum } from "./codatpublicapimodelsdataaccountstatusresponseenum";
import { CodatPublicApiModelsDataAccountTypeResponseEnum } from "./codatpublicapimodelsdataaccounttyperesponseenum";
import { CodatPublicApiModelsDataValidDatatypeLinksResponse } from "./codatpublicapimodelsdatavaliddatatypelinksresponse";


export class CodatPublicApiModelsDataAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currentBalance" })
  currentBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fullyQualifiedCategory" })
  fullyQualifiedCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isBankAccount" })
  isBankAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatPublicApiModelsDataAccountStatusResponseEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatPublicApiModelsDataAccountTypeResponseEnum;

  @SpeakeasyMetadata({ data: "json, name=validDatatypeLinks", elemType: CodatPublicApiModelsDataValidDatatypeLinksResponse })
  validDatatypeLinks?: CodatPublicApiModelsDataValidDatatypeLinksResponse[];
}