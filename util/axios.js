/** @namespace axios */

/**
 * @file Axios Options
 * @author Logan Prunty
 * @see {@link axios/options}
 */

/**
 * Function for creating an options object for axios
 * @memberof axios
 * @param {string} data String data to be sent to the Math API
 * @returns {Object} Axios Options
 */
const options = data => {

    return {

        method: "POST",
        url: "https://math6.p.rapidapi.com/generate",

        headers: {

            "content-type": "application/json",
            "x-rapidapi-host": "math6.p.rapidapi.com",
            "x-rapidapi-key": ""

        },

        data: { data: data }

    }

}

module.exports.options = options