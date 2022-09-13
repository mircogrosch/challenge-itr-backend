const {axios} = require("../data/mock_get_clients")
const {pagination} = require("../utils/pagination")
/**
 * Get benefits of clients
 * @param {*} req Express Request
 * @param {*} res Express Response
 */
const getBenefits = async (req,res)=> { 
    const {filter,page} = req.query
    try{
        const {data} = await axios.get("/clients")
        const filtered = data.clients.accounts.filter((e)=> e[filter])

        if(filtered.length){ 
            const orderByNameDescending = filtered.sort(compareFunctionToSortByName)
            const response = orderByNameDescending.map((client)=> {
                const {crmid,name,images} = client
                return {crmid,name,images}
            })
           return res.status(200).json(pagination(response,page))
        }
        
    }catch(e){
        throw Error(e)
    }
}
/**
 * Compare function to sort method
 * @param {*} a first element to compare
 * @param {*} b second element to compare
 */
const compareFunctionToSortByName = (a,b)=> { 
    if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
}

module.exports={
    getBenefits
}