import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddress } from "./codatdatacontractsdatasetsaddress";
import { CodatDataContractsDatasetsCustomerStatusEnum } from "./codatdatacontractsdatasetscustomerstatusenum";
import { CodatDataContractsDatasetsPhone } from "./codatdatacontractsdatasetsphone";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsContact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => CodatDataContractsDatasetsAddress)
  address?: CodatDataContractsDatasetsAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsPhone })
  @Expose({ name: "phone" })
  @Type(() => CodatDataContractsDatasetsPhone)
  phone?: CodatDataContractsDatasetsPhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CodatDataContractsDatasetsCustomerStatusEnum;
}