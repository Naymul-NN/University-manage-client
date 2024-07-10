// import { ReactNode } from "react"
import { TRoute, TuserPath } from "../types/sidebar.type"



// type TuserPath = {
//     name: string,
//     path?: string,
//     element?: ReactNode,
//     children?: TuserPath[]
// }


export const routeGenerator = (item : TuserPath[]) => {
    const routes = item.reduce((acc: TRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            })
        }

        if (item.children) {
            item.children.forEach((child) => {
                acc.push({
                    path: child.path!,
                    element: child.element,
                })
            })
        }
        return acc;
    }, [])
 return routes
}