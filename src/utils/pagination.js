/**
 * Limit response 
 * @param {*} data data to limit
 * @param {*} page page number
 */
const LIMIT_PER_PAGE = 4
const pagination = (data,page)=> { 
    const dataInitial = (page * LIMIT_PER_PAGE) - LIMIT_PER_PAGE
    const dataEnd = page * LIMIT_PER_PAGE
    return data.slice(dataInitial,dataEnd)
}

module.exports ={ pagination}