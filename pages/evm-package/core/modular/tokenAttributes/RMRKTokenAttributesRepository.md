# RMRKTokenAttributesRepository

*RMRK team*

> RMRKTokenAttributesRepository

Smart contract of the RMRK Token property repository module.



## Methods

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```






**Returns**

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### SET_ADDRESS_ATTRIBUTE_TYPEHASH

```solidity
function SET_ADDRESS_ATTRIBUTE_TYPEHASH() external view returns (bytes32)
```






**Returns**

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### SET_BOOL_ATTRIBUTE_TYPEHASH

```solidity
function SET_BOOL_ATTRIBUTE_TYPEHASH() external view returns (bytes32)
```






**Returns**

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### SET_BYTES_ATTRIBUTE_TYPEHASH

```solidity
function SET_BYTES_ATTRIBUTE_TYPEHASH() external view returns (bytes32)
```






**Returns**

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### SET_INT_ATTRIBUTE_TYPEHASH

```solidity
function SET_INT_ATTRIBUTE_TYPEHASH() external view returns (bytes32)
```






**Returns**

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### SET_STRING_ATTRIBUTE_TYPEHASH

```solidity
function SET_STRING_ATTRIBUTE_TYPEHASH() external view returns (bytes32)
```






**Returns**

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### SET_UINT_ATTRIBUTE_TYPEHASH

```solidity
function SET_UINT_ATTRIBUTE_TYPEHASH() external view returns (bytes32)
```






**Returns**

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### getAddressAttribute

```solidity
function getAddressAttribute(address collection, uint256 tokenId, string key) external view returns (address attribute)
```

Used to retrieve the address type token attributes.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the attribute |

**Returns**

| Name | Type | Description |
|---|---|---|
| attribute | address | The value of the address attribute |

### getAddressAttributes

```solidity
function getAddressAttributes(address[] collections, uint256[] tokenIds, string[] attributeKeys) external view returns (address[] attributes)
```

Used to get multiple address parameter values for a token.

*The `AddressAttribute` struct contains the following fields:  [     string key,     address value  ]*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | Addresses of the collections, in the same order as the attribute keys. If all tokens are from the same collection the array can contain a single element with the collection address. |
| tokenIds | uint256[] | IDs of the tokens, in the same order as the attribute keys. If all attributes are for the same token the array can contain a single element with the token ID. |
| attributeKeys | string[] | An array of address keys to retrieve |

**Returns**

| Name | Type | Description |
|---|---|---|
| attributes | address[] | An array of addresses, in the same order as the attribute keys |

### getAttributes

```solidity
function getAttributes(address collection, uint256 tokenId, string[] addressKeys, string[] boolKeys, string[] bytesKeys, string[] intKeys, string[] stringKeys, string[] uintKeys) external view returns (address[] addressAttributes, bool[] boolAttributes, bytes[] bytesAttributes, int256[] intAttributes, string[] stringAttributes, uint256[] uintAttributes)
```

Used to retrieve multiple token attributes of any type at once.

*The `StringAttribute`, `UintAttribute`, `IntAttribute`, `BoolAttribute`, `AddressAttribute` and `BytesAttribute` structs consists  to the following fields (where `value` is of the appropriate type):  [      key,      value,  ]*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| addressKeys | string[] | An array of address type attribute keys to retrieve |
| boolKeys | string[] | An array of bool type attribute keys to retrieve |
| bytesKeys | string[] | An array of bytes type attribute keys to retrieve |
| intKeys | string[] | An array of int type attribute keys to retrieve |
| stringKeys | string[] | An array of string type attribute keys to retrieve |
| uintKeys | string[] | An array of uint type attribute keys to retrieve |

**Returns**

| Name | Type | Description |
|---|---|---|
| addressAttributes | address[] | An array of addresses, in the same order as the addressKeys |
| boolAttributes | bool[] | An array of bools, in the same order as the boolKeys |
| bytesAttributes | bytes[] | An array of bytes, in the same order as the bytesKeys |
| intAttributes | int256[] | An array of ints, in the same order as the intKeys |
| stringAttributes | string[] | An array of strings, in the same order as the stringKeys |
| uintAttributes | uint256[] | An array of uints, in the same order as the uintKeys |

### getAttributesMetadataURIForCollection

```solidity
function getAttributesMetadataURIForCollection(address collection) external view returns (string attributesMetadataURI)
```

Used to retrieve the attributes metadata URI for a collection, which contains all the information about the collection attributes.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection |

**Returns**

| Name | Type | Description |
|---|---|---|
| attributesMetadataURI | string | The URI of the attributes metadata |

### getBoolAttribute

```solidity
function getBoolAttribute(address collection, uint256 tokenId, string key) external view returns (bool attribute)
```

Used to retrieve the bool type token attributes.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the attribute |

**Returns**

| Name | Type | Description |
|---|---|---|
| attribute | bool | The value of the bool attribute |

### getBoolAttributes

```solidity
function getBoolAttributes(address[] collections, uint256[] tokenIds, string[] attributeKeys) external view returns (bool[] attributes)
```

Used to get multiple bool parameter values for a token.

*The `BoolAttribute` struct contains the following fields:  [     string key,     bool value  ]*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | Addresses of the collections, in the same order as the attribute keys. If all tokens are from the same collection the array can contain a single element with the collection address. |
| tokenIds | uint256[] | IDs of the tokens, in the same order as the attribute keys. If all attributes are for the same token the array can contain a single element with the token ID. |
| attributeKeys | string[] | An array of bool keys to retrieve |

**Returns**

| Name | Type | Description |
|---|---|---|
| attributes | bool[] | An array of bools, in the same order as the attribute keys |

### getBytesAttribute

```solidity
function getBytesAttribute(address collection, uint256 tokenId, string key) external view returns (bytes attribute)
```

Used to retrieve the bytes type token attributes.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the attribute |

**Returns**

| Name | Type | Description |
|---|---|---|
| attribute | bytes | The value of the bytes attribute |

### getBytesAttributes

```solidity
function getBytesAttributes(address[] collections, uint256[] tokenIds, string[] attributeKeys) external view returns (bytes[] attributes)
```

Used to get multiple bytes parameter values for a token.

*The `BytesAttribute` struct contains the following fields:  [     string key,     bytes value  ]*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | Addresses of the collections, in the same order as the attribute keys. If all tokens are from the same collection the array can contain a single element with the collection address. |
| tokenIds | uint256[] | IDs of the tokens, in the same order as the attribute keys. If all attributes are for the same token the array can contain a single element with the token ID. |
| attributeKeys | string[] | An array of bytes keys to retrieve |

**Returns**

| Name | Type | Description |
|---|---|---|
| attributes | bytes[] | An array of bytes, in the same order as the attribute keys |

### getIntAttribute

```solidity
function getIntAttribute(address collection, uint256 tokenId, string key) external view returns (int256 attribute)
```

Used to retrieve the int type token attributes.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the attribute |

**Returns**

| Name | Type | Description |
|---|---|---|
| attribute | int256 | The value of the uint attribute |

### getIntAttributes

```solidity
function getIntAttributes(address[] collections, uint256[] tokenIds, string[] attributeKeys) external view returns (int256[] attributes)
```

Used to get multiple int parameter values for a token.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | Addresses of the collections, in the same order as the attribute keys. If all tokens are from the same collection the array can contain a single element with the collection address. |
| tokenIds | uint256[] | IDs of the tokens, in the same order as the attribute keys. If all attributes are for the same token the array can contain a single element with the token ID. |
| attributeKeys | string[] | An array of int keys to retrieve |

**Returns**

| Name | Type | Description |
|---|---|---|
| attributes | int256[] | An array of ints, in the same order as the attribute keys |

### getStringAttribute

```solidity
function getStringAttribute(address collection, uint256 tokenId, string key) external view returns (string attribute)
```

Used to retrieve the string type token attributes.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the attribute |

**Returns**

| Name | Type | Description |
|---|---|---|
| attribute | string | The value of the string attribute |

### getStringAttributes

```solidity
function getStringAttributes(address[] collections, uint256[] tokenIds, string[] attributeKeys) external view returns (string[] attributes)
```

Used to get multiple sting parameter values for a token.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | Addresses of the collections, in the same order as the attribute keys. If all tokens are from the same collection the array can contain a single element with the collection address. |
| tokenIds | uint256[] | IDs of the tokens, in the same order as the attribute keys. If all attributes are for the same token the array can contain a single element with the token ID. |
| attributeKeys | string[] | An array of string keys to retrieve |

**Returns**

| Name | Type | Description |
|---|---|---|
| attributes | string[] | An array of strings, in the same order as the attribute keys |

### getUintAttribute

```solidity
function getUintAttribute(address collection, uint256 tokenId, string key) external view returns (uint256 attribute)
```

Used to retrieve the uint type token attributes.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The collection address |
| tokenId | uint256 | The token ID |
| key | string | The key of the attribute |

**Returns**

| Name | Type | Description |
|---|---|---|
| attribute | uint256 | The value of the uint attribute |

### getUintAttributes

```solidity
function getUintAttributes(address[] collections, uint256[] tokenIds, string[] attributeKeys) external view returns (uint256[] attributes)
```

Used to get multiple uint parameter values for a token.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | Addresses of the collections, in the same order as the attribute keys. If all tokens are from the same collection the array can contain a single element with the collection address. |
| tokenIds | uint256[] | IDs of the tokens, in the same order as the attribute keys. If all attributes are for the same token the array can contain a single element with the token ID. |
| attributeKeys | string[] | An array of uint keys to retrieve |

**Returns**

| Name | Type | Description |
|---|---|---|
| attributes | uint256[] | An array of uints, in the same order as the attribute keys |

### isCollaborator

```solidity
function isCollaborator(address collaborator, address collection) external view returns (bool isCollaborator_)
```

Used to check if the specified address is listed as a collaborator of the given collection&#39;s parameter.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collaborator | address | Address to be checked. |
| collection | address | Address of the collection. |

**Returns**

| Name | Type | Description |
|---|---|---|
| isCollaborator_ | bool | Boolean value indicating if the address is a collaborator of the given collection&#39;s (`true`) or not  (`false`). |

### isSpecificAddress

```solidity
function isSpecificAddress(address specificAddress, address collection, string key) external view returns (bool isSpecificAddress_)
```

Used to check if the specified address is listed as a specific address of the given collection&#39;s  parameter.



**Parameters**

| Name | Type | Description |
|---|---|---|
| specificAddress | address | Address to be checked. |
| collection | address | Address of the collection. |
| key | string | The key of the attribute |

**Returns**

| Name | Type | Description |
|---|---|---|
| isSpecificAddress_ | bool | Boolean value indicating if the address is a specific address of the given collection&#39;s parameter  (`true`) or not (`false`). |

### manageAccessControl

```solidity
function manageAccessControl(address collection, string key, enum IERC7508.AccessType accessType, address specificAddress) external nonpayable
```

Used to manage the access control settings for a specific parameter.

*Only the `owner` of the collection can call this function.The possible `accessType` values are:  [      Owner,      Collaborator,      OwnerOrCollaborator,      TokenOwner,      SpecificAddress,  ]Emits an {AccessControlUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection being managed. |
| key | string | The key of the attribute |
| accessType | enum IERC7508.AccessType | The type of access control to be applied to the parameter. |
| specificAddress | address | The address to be added as a specific addresses allowed to manage the given  parameter. |

### manageCollaborators

```solidity
function manageCollaborators(address collection, address[] collaboratorAddresses, bool[] collaboratorAddressAccess) external nonpayable
```

Used to manage the collaborators of a collection.

*The `collaboratorAddresses` and `collaboratorAddressAccess` arrays must be of the same length.Emits a {CollaboratorUpdate} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection |
| collaboratorAddresses | address[] | The array of collaborator addresses being managed |
| collaboratorAddressAccess | bool[] | The array of boolean values indicating if the collaborator address should  receive the permission (`true`) or not (`false`). |

### prepareMessageToPresignAddressAttribute

```solidity
function prepareMessageToPresignAddressAttribute(address collection, uint256 tokenId, string key, address value, uint256 deadline) external view returns (bytes32 message)
```

Used to retrieve the message to be signed for submitting a presigned address attribute change.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection smart contract of the token receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | address | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction after which the message is invalid |

**Returns**

| Name | Type | Description |
|---|---|---|
| message | bytes32 | Raw message to be signed by the authorized account |

### prepareMessageToPresignBoolAttribute

```solidity
function prepareMessageToPresignBoolAttribute(address collection, uint256 tokenId, string key, bool value, uint256 deadline) external view returns (bytes32 message)
```

Used to retrieve the message to be signed for submitting a presigned bool attribute change.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection smart contract of the token receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | bool | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction after which the message is invalid |

**Returns**

| Name | Type | Description |
|---|---|---|
| message | bytes32 | Raw message to be signed by the authorized account |

### prepareMessageToPresignBytesAttribute

```solidity
function prepareMessageToPresignBytesAttribute(address collection, uint256 tokenId, string key, bytes value, uint256 deadline) external view returns (bytes32 message)
```

Used to retrieve the message to be signed for submitting a presigned bytes attribute change.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection smart contract of the token receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | bytes | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction after which the message is invalid |

**Returns**

| Name | Type | Description |
|---|---|---|
| message | bytes32 | Raw message to be signed by the authorized account |

### prepareMessageToPresignIntAttribute

```solidity
function prepareMessageToPresignIntAttribute(address collection, uint256 tokenId, string key, int256 value, uint256 deadline) external view returns (bytes32 message)
```

Used to retrieve the message to be signed for submitting a presigned int attribute change.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection smart contract of the token receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | int256 | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction after which the message is invalid |

**Returns**

| Name | Type | Description |
|---|---|---|
| message | bytes32 | Raw message to be signed by the authorized account |

### prepareMessageToPresignStringAttribute

```solidity
function prepareMessageToPresignStringAttribute(address collection, uint256 tokenId, string key, string value, uint256 deadline) external view returns (bytes32 message)
```

Used to retrieve the message to be signed for submitting a presigned string attribute change.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection smart contract of the token receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | string | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction after which the message is invalid |

**Returns**

| Name | Type | Description |
|---|---|---|
| message | bytes32 | Raw message to be signed by the authorized account |

### prepareMessageToPresignUintAttribute

```solidity
function prepareMessageToPresignUintAttribute(address collection, uint256 tokenId, string key, uint256 value, uint256 deadline) external view returns (bytes32 message)
```

Used to retrieve the message to be signed for submitting a presigned uint attribute change.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection smart contract of the token receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | uint256 | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction after which the message is invalid |

**Returns**

| Name | Type | Description |
|---|---|---|
| message | bytes32 | Raw message to be signed by the authorized account |

### presignedSetAddressAttribute

```solidity
function presignedSetAddressAttribute(address setter, address collection, uint256 tokenId, string key, address value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Used to set the address attribute on behalf of an authorized account.

*Emits a {AddressAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| setter | address | Address of the account that presigned the attribute change |
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | address | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction |
| v | uint8 | `v` value of an ECDSA signature of the presigned message |
| r | bytes32 | `r` value of an ECDSA signature of the presigned message |
| s | bytes32 | `s` value of an ECDSA signature of the presigned message |

### presignedSetBoolAttribute

```solidity
function presignedSetBoolAttribute(address setter, address collection, uint256 tokenId, string key, bool value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Used to set the bool attribute on behalf of an authorized account.

*Emits a {BoolAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| setter | address | Address of the account that presigned the attribute change |
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | bool | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction |
| v | uint8 | `v` value of an ECDSA signature of the presigned message |
| r | bytes32 | `r` value of an ECDSA signature of the presigned message |
| s | bytes32 | `s` value of an ECDSA signature of the presigned message |

### presignedSetBytesAttribute

```solidity
function presignedSetBytesAttribute(address setter, address collection, uint256 tokenId, string key, bytes value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Used to set the bytes attribute on behalf of an authorized account.

*Emits a {BytesAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| setter | address | Address of the account that presigned the attribute change |
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | bytes | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction |
| v | uint8 | `v` value of an ECDSA signature of the presigned message |
| r | bytes32 | `r` value of an ECDSA signature of the presigned message |
| s | bytes32 | `s` value of an ECDSA signature of the presigned message |

### presignedSetIntAttribute

```solidity
function presignedSetIntAttribute(address setter, address collection, uint256 tokenId, string key, int256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Used to set the int attribute on behalf of an authorized account.

*Emits a {IntAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| setter | address | Address of the account that presigned the attribute change |
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | int256 | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction |
| v | uint8 | `v` value of an ECDSA signature of the presigned message |
| r | bytes32 | `r` value of an ECDSA signature of the presigned message |
| s | bytes32 | `s` value of an ECDSA signature of the presigned message |

### presignedSetStringAttribute

```solidity
function presignedSetStringAttribute(address setter, address collection, uint256 tokenId, string key, string value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Used to set the string attribute on behalf of an authorized account.

*Emits a {StringAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| setter | address | Address of the account that presigned the attribute change |
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | string | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction |
| v | uint8 | `v` value of an ECDSA signature of the presigned message |
| r | bytes32 | `r` value of an ECDSA signature of the presigned message |
| s | bytes32 | `s` value of an ECDSA signature of the presigned message |

### presignedSetUintAttribute

```solidity
function presignedSetUintAttribute(address setter, address collection, uint256 tokenId, string key, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Used to set the uint attribute on behalf of an authorized account.

*Emits a {UintAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| setter | address | Address of the account that presigned the attribute change |
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The ID of the token receiving the attribute |
| key | string | The attribute key |
| value | uint256 | The attribute value |
| deadline | uint256 | The deadline timestamp for the presigned transaction |
| v | uint8 | `v` value of an ECDSA signature of the presigned message |
| r | bytes32 | `r` value of an ECDSA signature of the presigned message |
| s | bytes32 | `s` value of an ECDSA signature of the presigned message |

### registerAccessControl

```solidity
function registerAccessControl(address collection, address owner, bool useOwnable) external nonpayable
```

Used to register a collection to use the RMRK token attributes repository.

*If the collection does not implement the Ownable interface, the `useOwnable` value must be set to `false`.Emits an {AccessControlRegistration} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | The address of the collection that will use the RMRK token attributes repository. |
| owner | address | The address of the owner of the collection. |
| useOwnable | bool | The boolean value to indicate if the collection implements the Ownable interface and whether it  should be used to validate that the caller is the owner (`true`) or to use the manually set owner address  (`false`). |

### setAddressAttribute

```solidity
function setAddressAttribute(address collection, uint256 tokenId, string key, address value) external nonpayable
```

Used to set an address attribute.

*Emits a {AddressAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The token ID |
| key | string | The attribute key |
| value | address | The attribute value |

### setAddressAttributes

```solidity
function setAddressAttributes(address[] collections, uint256[] tokenIds, IERC7508.AddressAttribute[] attributes) external nonpayable
```





**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | undefined |
| tokenIds | uint256[] | undefined |
| attributes | IERC7508.AddressAttribute[] | undefined |

### setAttributes

```solidity
function setAttributes(address collection, uint256 tokenId, IERC7508.AddressAttribute[] addressAttributes, IERC7508.BoolAttribute[] boolAttributes, IERC7508.BytesAttribute[] bytesAttributes, IERC7508.IntAttribute[] intAttributes, IERC7508.StringAttribute[] stringAttributes, IERC7508.UintAttribute[] uintAttributes) external nonpayable
```





**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | undefined |
| tokenId | uint256 | undefined |
| addressAttributes | IERC7508.AddressAttribute[] | undefined |
| boolAttributes | IERC7508.BoolAttribute[] | undefined |
| bytesAttributes | IERC7508.BytesAttribute[] | undefined |
| intAttributes | IERC7508.IntAttribute[] | undefined |
| stringAttributes | IERC7508.StringAttribute[] | undefined |
| uintAttributes | IERC7508.UintAttribute[] | undefined |

### setAttributesMetadataURIForCollection

```solidity
function setAttributesMetadataURIForCollection(address collection, string attributesMetadataURI) external nonpayable
```

Used to set the metadata URI for a collection, which contains all the information about the collection attributes.

*Emits a {MetadataURIUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection |
| attributesMetadataURI | string | The URI of the attributes metadata |

### setBoolAttribute

```solidity
function setBoolAttribute(address collection, uint256 tokenId, string key, bool value) external nonpayable
```

Used to set a boolean attribute.

*Emits a {BoolAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The token ID |
| key | string | The attribute key |
| value | bool | The attribute value |

### setBoolAttributes

```solidity
function setBoolAttributes(address[] collections, uint256[] tokenIds, IERC7508.BoolAttribute[] attributes) external nonpayable
```





**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | undefined |
| tokenIds | uint256[] | undefined |
| attributes | IERC7508.BoolAttribute[] | undefined |

### setBytesAttribute

```solidity
function setBytesAttribute(address collection, uint256 tokenId, string key, bytes value) external nonpayable
```

Used to set an bytes attribute.

*Emits a {BytesAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The token ID |
| key | string | The attribute key |
| value | bytes | The attribute value |

### setBytesAttributes

```solidity
function setBytesAttributes(address[] collections, uint256[] tokenIds, IERC7508.BytesAttribute[] attributes) external nonpayable
```





**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | undefined |
| tokenIds | uint256[] | undefined |
| attributes | IERC7508.BytesAttribute[] | undefined |

### setIntAttribute

```solidity
function setIntAttribute(address collection, uint256 tokenId, string key, int256 value) external nonpayable
```

Used to set a signed number attribute.

*Emits a {IntAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The token ID |
| key | string | The attribute key |
| value | int256 | The attribute value |

### setIntAttributes

```solidity
function setIntAttributes(address[] collections, uint256[] tokenIds, IERC7508.IntAttribute[] attributes) external nonpayable
```





**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | undefined |
| tokenIds | uint256[] | undefined |
| attributes | IERC7508.IntAttribute[] | undefined |

### setStringAttribute

```solidity
function setStringAttribute(address collection, uint256 tokenId, string key, string value) external nonpayable
```

Used to set a string attribute.

*Emits a {StringAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The token ID |
| key | string | The attribute key |
| value | string | The attribute value |

### setStringAttributes

```solidity
function setStringAttributes(address[] collections, uint256[] tokenIds, IERC7508.StringAttribute[] attributes) external nonpayable
```





**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | undefined |
| tokenIds | uint256[] | undefined |
| attributes | IERC7508.StringAttribute[] | undefined |

### setUintAttribute

```solidity
function setUintAttribute(address collection, uint256 tokenId, string key, uint256 value) external nonpayable
```

Used to set an unsigned number attribute.

*Emits a {UintAttributeUpdated} event.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| collection | address | Address of the collection receiving the attribute |
| tokenId | uint256 | The token ID |
| key | string | The attribute key |
| value | uint256 | The attribute value |

### setUintAttributes

```solidity
function setUintAttributes(address[] collections, uint256[] tokenIds, IERC7508.UintAttribute[] attributes) external nonpayable
```





**Parameters**

| Name | Type | Description |
|---|---|---|
| collections | address[] | undefined |
| tokenIds | uint256[] | undefined |
| attributes | IERC7508.UintAttribute[] | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.*

**Parameters**

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

**Returns**

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### AccessControlRegistration

```solidity
event AccessControlRegistration(address indexed collection, address indexed owner, address indexed registeringAddress, bool useOwnable)
```

Used to notify listeners that a new collection has been registered to use the repository.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | Address of the collection |
| owner `indexed` | address | Address of the owner of the collection; the addess authorized to manage the access control |
| registeringAddress `indexed` | address | Address that registered the collection |
| useOwnable  | bool | A boolean value indicating whether the collection uses the Ownable extension to verify the  owner (`true`) or not (`false`) |

### AccessControlUpdate

```solidity
event AccessControlUpdate(address indexed collection, string key, enum IERC7508.AccessType accessType, address specificAddress)
```

Used to notify listeners that the access control settings for a specific parameter have been updated.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | Address of the collection |
| key  | string | The name of the parameter for which the access control settings have been updated |
| accessType  | enum IERC7508.AccessType | The AccessType of the parameter for which the access control settings have been updated |
| specificAddress  | address | The specific addresses that has been updated |

### AddressAttributeUpdated

```solidity
event AddressAttributeUpdated(address indexed collection, uint256 indexed tokenId, string key, address value)
```

Used to notify listeners that an address attribute has been updated.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the attribute |
| value  | address | The new value of the attribute |

### BoolAttributeUpdated

```solidity
event BoolAttributeUpdated(address indexed collection, uint256 indexed tokenId, string key, bool value)
```

Used to notify listeners that a boolean attribute has been updated.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the attribute |
| value  | bool | The new value of the attribute |

### BytesAttributeUpdated

```solidity
event BytesAttributeUpdated(address indexed collection, uint256 indexed tokenId, string key, bytes value)
```

Used to notify listeners that a bytes attribute has been updated.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the attribute |
| value  | bytes | The new value of the attribute |

### CollaboratorUpdate

```solidity
event CollaboratorUpdate(address indexed collection, address indexed collaborator, bool isCollaborator)
```

Used to notify listeners that a new collaborator has been added or removed.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | Address of the collection |
| collaborator `indexed` | address | Address of the collaborator |
| isCollaborator  | bool | A boolean value indicating whether the collaborator has been added (`true`) or removed  (`false`) |

### IntAttributeUpdated

```solidity
event IntAttributeUpdated(address indexed collection, uint256 indexed tokenId, string key, int256 value)
```

Used to notify listeners that an int attribute has been updated.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the attribute |
| value  | int256 | The new value of the attribute |

### MetadataURIUpdated

```solidity
event MetadataURIUpdated(address indexed collection, string attributesMetadataURI)
```

Used to notify listeners that the metadata URI for a collection has been updated.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | Address of the collection |
| attributesMetadataURI  | string | The new attributes metadata URI |

### StringAttributeUpdated

```solidity
event StringAttributeUpdated(address indexed collection, uint256 indexed tokenId, string key, string value)
```

Used to notify listeners that a string attribute has been updated.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the attribute |
| value  | string | The new value of the attribute |

### UintAttributeUpdated

```solidity
event UintAttributeUpdated(address indexed collection, uint256 indexed tokenId, string key, uint256 value)
```

Used to notify listeners that an uint attribute has been updated.



**Parameters**

| Name | Type | Description |
|---|---|---|
| collection `indexed` | address | The collection address |
| tokenId `indexed` | uint256 | The token ID |
| key  | string | The key of the attribute |
| value  | uint256 | The new value of the attribute |



## Errors

### CollaboratorArraysNotEqualLength

```solidity
error CollaboratorArraysNotEqualLength()
```

Used to signal that the collaborator and collaborator rights array are not of equal length.




### CollectionNotRegistered

```solidity
error CollectionNotRegistered()
```

Used to signal that the collection is not registered in the repository yet.




### ExpiredDeadline

```solidity
error ExpiredDeadline()
```

Used to signal that the presigned message&#39;s deadline has expired.




### InvalidSignature

```solidity
error InvalidSignature()
```

Used to signal that the presigned message&#39;s signature is invalid.




### LengthsMismatch

```solidity
error LengthsMismatch()
```

Used to signal that the length of the arrays is not equal.




### NotCollectionCollaborator

```solidity
error NotCollectionCollaborator()
```

Used to signal that the caller is not aa collaborator of the collection.




### NotCollectionOwner

```solidity
error NotCollectionOwner()
```

Used to signal that the caller is not the owner of the collection.




### NotCollectionOwnerOrCollaborator

```solidity
error NotCollectionOwnerOrCollaborator()
```

Used to signal that the caller is not the owner or a collaborator of the collection.




### NotSpecificAddress

```solidity
error NotSpecificAddress()
```

Used to signal that the caller is not the specific address allowed to manage the attribute.




### NotTokenOwner

```solidity
error NotTokenOwner()
```

Used to signal that the caller is not the owner of the token.




### OwnableNotImplemented

```solidity
error OwnableNotImplemented()
```

Used to signal that the smart contract interacting with the repository does not implement Ownable pattern.





