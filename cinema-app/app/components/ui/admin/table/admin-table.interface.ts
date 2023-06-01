export interface ITableItem  {
    _id: string
    editNavigate: () => void
    items: string[]
}
export interface IAdminTableItem  {
    tableItem: ITableItem
    removeHandler: () => void
}