import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatDataIntegrityContractsDetailsTransactionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: CodatDataIntegrityContractsDetailsTransactionDetails })
  matches?: CodatDataIntegrityContractsDetailsTransactionDetails[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
