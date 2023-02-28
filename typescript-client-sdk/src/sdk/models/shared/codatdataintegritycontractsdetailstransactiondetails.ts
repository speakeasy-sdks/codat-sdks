import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataIntegrityContractsDetailsTransactionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: CodatDataIntegrityContractsDetailsTransactionDetails })
  @Expose({ name: "matches" })
  @Type(() => CodatDataIntegrityContractsDetailsTransactionDetails)
  matches?: CodatDataIntegrityContractsDetailsTransactionDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}