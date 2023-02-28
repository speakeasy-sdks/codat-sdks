import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum } from "./codatdatacontractsdatasetsaccountspayableisbilledtotypeenum";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsProjectRef } from "./codatdatacontractsdatasetsprojectref";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsAccountsPayableTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsTrackingCategoryRef })
  @Expose({ name: "categoryRefs" })
  @Type(() => CodatDataContractsDatasetsTrackingCategoryRef)
  categoryRefs: CodatDataContractsDatasetsTrackingCategoryRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => CodatDataContractsDatasetsCustomerRef)
  customerRef?: CodatDataContractsDatasetsCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => CodatDataContractsDatasetsProjectRef)
  projectRef?: CodatDataContractsDatasetsProjectRef;
}