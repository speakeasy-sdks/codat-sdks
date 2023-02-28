import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum } from "./codatdatacontractsdatasetsaccountsreceivableisbilledtotypeenum";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsProjectRef } from "./codatdatacontractsdatasetsprojectref";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsAccountsReceivableTracking extends SpeakeasyBase {
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
  isBilledTo: CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => CodatDataContractsDatasetsProjectRef)
  projectRef?: CodatDataContractsDatasetsProjectRef;
}