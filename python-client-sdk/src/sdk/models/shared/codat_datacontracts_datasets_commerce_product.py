import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_commerce_productcategoryref as shared_codat_datacontracts_datasets_commerce_productcategoryref
from ..shared import codat_datacontracts_datasets_commerce_productstatus_enum as shared_codat_datacontracts_datasets_commerce_productstatus_enum
from ..shared import codat_datacontracts_datasets_commerce_productvariant as shared_codat_datacontracts_datasets_commerce_productvariant
from ..shared import codat_datacontracts_datasets_datainterfaces_supplementaldata as shared_codat_datacontracts_datasets_datainterfaces_supplementaldata
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceProduct:
    categorization: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categorization') }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_gift_card: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isGiftCard') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_category_refs: Optional[list[shared_codat_datacontracts_datasets_commerce_productcategoryref.CodatDataContractsDatasetsCommerceProductCategoryRef]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCategoryRefs') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_codat_datacontracts_datasets_commerce_productstatus_enum.CodatDataContractsDatasetsCommerceProductStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    supplemental_data: Optional[shared_codat_datacontracts_datasets_datainterfaces_supplementaldata.CodatDataContractsDatasetsDataInterfacesSupplementalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplementalData') }})
    variants: Optional[list[shared_codat_datacontracts_datasets_commerce_productvariant.CodatDataContractsDatasetsCommerceProductVariant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variants') }})
    