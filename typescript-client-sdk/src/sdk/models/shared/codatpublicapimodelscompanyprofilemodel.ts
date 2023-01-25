import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatPublicApiModelsCompanyProfileModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertAuthHeader" })
  alertAuthHeader?: string;

  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=confirmCompanyName" })
  confirmCompanyName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=redirectUrl" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=whiteListUrls" })
  whiteListUrls?: string[];
}
