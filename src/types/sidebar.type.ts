import { ReactNode } from "react"

export type TRoute = {
    path: string,
    element: ReactNode
}

export type TuserPath = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TuserPath[]
}

export type TsideBarItem = {
    key: string,
    label: ReactNode,
    children?: TsideBarItem[]
}