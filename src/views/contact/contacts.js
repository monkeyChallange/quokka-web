const getContactUrl = (name) => () => require(`@/assets/contacts/${name}.png`)

export default [
    {
        name:"Henrik Nesser",
        position:"CEO Quokka AB",
        phone:"+46 (0)76-002 8 001",
        email:"henrik.nesser@quokka.se",
        img: getContactUrl('henrik')
    },
    {
        name:"Teresia Von Sicard",
        position:"CEO Software by Quokka",
        phone:"+46 (0)76-002 9 001",
        email:"teresia.sicard@quokka.se",
        img: getContactUrl('teresia')
    },
    {
        name:"Johannes Troedsson",
        position:"Business Unit Manager",
        phone:"+46 (0)76-002 9 002",
        email:"johannes.troedsson@quokka.se",
        img: getContactUrl('johannes')
    },
    {
        name:"Fehmi",
        position:"Business Unit Manager",
        phone:"+46 (0)76-002 9 004",
        email:"fehmi.fetiu@quokka.se",
        img: getContactUrl('fehmi')
    }

]