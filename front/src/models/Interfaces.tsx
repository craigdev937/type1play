export interface IPlay {
    first: string,
    last: string,
    age: number,
    info: string
};

export interface IPlayer extends IPlay {
    // useParams defaults to a string.
    id: number | string
};



