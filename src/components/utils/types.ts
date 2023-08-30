import { ReactNode } from "react";

export interface TypesWeather {
    weather?: string | number,
    id?: ReactNode,
    icon?: string | undefined,
    country?: string,
    city?: string,
    description?:string
    main?: number,
    temp?: number,
    pressure?: number,
    sunset?: number,
    sunrise?: number ,
    speed?: number ,
    temp_max?: number,
    temp_min?: number,
    humidity?: number,

} 