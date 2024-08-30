

export type News = {
    id: number;
    title: string;
    content: string;
    imgUrl: string;
    date:string
}

export interface PageableRequest{
    content: Array<News>;
    pageable:Object;
    totalPages:number;
    totalElements:number;
}
