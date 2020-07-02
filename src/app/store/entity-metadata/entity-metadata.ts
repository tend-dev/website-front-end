import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Blog: {}
};

const pluralNames = { Blog: 'Blog' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
