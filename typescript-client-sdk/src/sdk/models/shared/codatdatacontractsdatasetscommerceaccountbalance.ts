import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatDataContractsDatasetsCommerceAccountBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=reserved" })
  reserved?: number;
}
