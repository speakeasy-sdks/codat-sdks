import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SchemeAPIKeyAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}

export class SchemeCodatLogin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}

export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: SchemeAPIKeyAuth;
}