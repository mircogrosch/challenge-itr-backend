const {axios} = require("../data/mock_get_clients")
const {pagination} = require("../utils/pagination")
/**
 * Get all branches of Clients
 * @param {*} req Express Request
 * @param {*} res Express Response
 */
const getBranches = async (req,res)=> { 
    const {page, filter} = req.query
    try{
        const {data} = await axios.get("/clients")
        const filtered = data.clients.accounts.filter((client)=> client.tags.find((e)=> e.name === filter))
        if(filtered.length) { 
            const orderByLocationProximity = filtered.sort(compareFunction)
            const response = orderByLocationProximity.map((client) => {
                const {crmid,name, benefits,image, branches} = client
                
                return {crmid,name,image,branches: branches[0],benefits} 
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
 * @returns array sort
 */
const compareFunction= (a,b)=> { 
    a.branches = a.branches.sort((a,b)=> a.location - b.location)
    b.branches = b.branches.sort((a,b)=> a.location - b.location)
    return a.branches[0].location - b.branches[0].location 
}

module.exports = { 
   getBranches:  getBranches,
}