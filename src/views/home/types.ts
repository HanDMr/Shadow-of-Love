export interface IMenuItem {
    id: number,
    title: string,
    route: string,
    children: Array<IMenuItem>
}