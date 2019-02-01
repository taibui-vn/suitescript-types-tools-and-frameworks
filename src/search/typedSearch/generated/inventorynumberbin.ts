// This file is automatically generated - don't edit it. 
// Search Types for record Inventory Number Bin (inventorynumberbin)

// Search Columns

/** Inventory Number Bin (inventorynumberbin) Search Columns definition */
export interface inventorynumberbinSearchColumn {
  /** Bin Number (binnumber: select) */
      binnumber?: string;
  /** Inventory Number (inventorynumber: select) */
      inventorynumber?: string;
  /** Location (location: select) */
      location?: string;
  /** Available (quantityavailable: float) */
      quantityavailable?: number;
  /** On Hand (quantityonhand: float) */
      quantityonhand?: number;
}


// Search Filters

/** Inventory Number Bin (inventorynumberbin) Search Filters definition */
export interface inventorynumberbinSearchFilter {
/** Bin Number (binnumber: select) */
  binnumber?: string;
  /** Inventory Number (inventorynumber: text) */
  inventorynumber?: string;
  /** Location (location: select) */
  location?: string;
  /** Availabile (quantityavailable: float) */
  quantityavailable?: number;
  /** On Hand (quantityonhand: float) */
  quantityonhand?: number;
}


// Search Joins

/** Inventory Number Bin (inventorynumberbin) Search Joins definitions. */
export interface inventorynumberbinSearchJoinTypes {

}


// Search Filter Types

/** Inventory Number Bin (inventorynumberbin) Search Filter Type definitions. */
export interface inventorynumberbinSearchFilterTypes {
binnumber: 'select';
  inventorynumber: 'text';
  location: 'select';
  quantityavailable: 'float';
  quantityonhand: 'float';
}


// Search Column Types

/** Inventory Number Bin (inventorynumberbin) Search Column Type definitions. */
export interface inventorynumberbinSearchColumnTypes {
binnumber: 'select';
  inventorynumber: 'select';
  location: 'select';
  quantityavailable: 'float';
  quantityonhand: 'float';
}