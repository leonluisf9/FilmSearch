interface Rating {
    Source: string;
    Value: string;
}

// TODO: Define an interface for the `Film` object based on the data provided by OMDb API
// TODO: Can the properties be marked as readonly?
export default interface Film {readonly Title: string;
    readonly Year: string;
    readonly Rated: string;
    readonly Released: string;
    readonly Runtime: string;
    readonly Genre: string;
    readonly Director: string;
    readonly Writer: string;
    readonly Actors: string;
    readonly Plot: string;
    readonly Language: string;
    readonly Country: string;
    readonly Awards: string;
    readonly Poster: string;
    readonly Ratings: readonly Rating[]; // also make the array itself readonly
    readonly Metascore: string;
    readonly imdbRating: string;
    readonly imdbVotes: string;
    readonly imdbID: string;
    readonly Type: string;
    readonly DVD: string;
    readonly BoxOffice: string;
    readonly Production: string;
    readonly Website: string;
    readonly Response: string;
}

