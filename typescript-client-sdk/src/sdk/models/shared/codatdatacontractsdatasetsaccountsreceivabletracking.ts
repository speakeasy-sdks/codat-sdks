import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum } from "./codatdatacontractsdatasetsaccountsreceivableisbilledtotypeenum";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsProjectRef } from "./codatdatacontractsdatasetsprojectref";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";


export class CodatDataContractsDatasetsAccountsReceivableTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: CodatDataContractsDatasetsTrackingCategoryRef })
  categoryRefs: CodatDataContractsDatasetsTrackingCategoryRef[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: CodatDataContractsDatasetsCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: CodatDataContractsDatasetsProjectRef;
}