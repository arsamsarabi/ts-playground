type MultiArray = Array<Array<Array<Array<string>>>>;

type UnMultiArray<T> = T extends Array<infer Inner> ? UnMultiArray<Inner> : T;

type Result = UnMultiArray<MultiArray>;
