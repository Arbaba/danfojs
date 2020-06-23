
/**
 * Package wide configuration class
 */
export class Configs {
    constructor() {
        this.table_width = 10  //set the width of each column printed in console
        this.table_truncate = 10 //set the max number of string before text is truncated in printing
        this.dtype_test_lim = 10
    }

    set_width(val) {
        this.table_width = val
    }

    get get_width() {
        return this.table_width
    }

    get get_truncate() {
        return this.table_truncate
    }

    set_truncate(val) {
        this.table_truncate = val
    }

    get get_dtype_test_lim() {
        return this.dtype_test_lim
    }

    set_dtype_test_lim(val) {
        this.dtype_test_lim = val
    }
}