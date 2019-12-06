
const bayDetails=[
    {
        id:1,
        name:"",
        organisation:"optus",
        resource_number:300
    },
    {
        id:2,
        name:"",
        organisation:"optus",
        resource_number:50
    },
    {
        id:3,
        name:"",
        organisation:"optus",
        resource_number:60
    },
    {
        id:4,
        name:"",
        organisation:"Singtel",
        resource_number:120
    }
]



module.exports.fetchDetailsByBayID=function(id){

    return bayDetails.find(item=>item.id==id)

}