type Replace<S extends string, From extends string, To extends string> = From extends S? To:S
