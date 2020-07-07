export interface Catalog {
  id: number | string;
  groupName: string;
  groupSlug: string;
  children?: Catalog[];
}

export function createCatalog(params: Partial<Catalog>) {
  return {

  } as Catalog;
}
