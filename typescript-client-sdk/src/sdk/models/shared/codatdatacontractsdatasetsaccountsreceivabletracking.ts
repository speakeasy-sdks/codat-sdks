import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum } from "./codatdatacontractsdatasetsaccountsreceivableisbilledtotypeenum";
import { CodatDataContractsDatasetsProjectRef } from "./codatdatacontractsdatasetsprojectref";



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
