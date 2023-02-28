import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsCompanyProfileModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alertAuthHeader" })
  alertAuthHeader?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmCompanyName" })
  confirmCompanyName?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "redirectUrl" })
  redirectUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "whiteListUrls" })
  whiteListUrls?: string[];
}