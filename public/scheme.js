const schemes =[
    {
    "name":"Pradhan Mantri Jan Arogya Yojana",
    "Elibility":"Central",
    "website":"https://mera.pmjay.gov.in",
    },
    {
        "name":"Ayushman Yojana",
        "Elibility":"Central",
        "website":"https://ayushmanbharat.mp.gov.in/",
    },
    {
        "name":"Pradhan Mantri Surakhsha Yojana",
        "Elibility":"Central",
        "website":"https://nationalinsurance.nic.co.in/en/about-us/pradhan-mantri-suraksha-bima-yojana",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },

]


//function for the fetching the data in the table 
buildTable(schemes)
function buildTable(data){
    const table =document.getElementById('mytable')
    for(let i=0;i<data.length;i++){
        const row = 
        `<tr>
        <td> ${data[i].name}</td>
        <td> ${data[i].Elibility}</td>
        <td> <a href=${data[i].website} > ${data[i].website} </a></td>
</tr>`
table.innerHTML +=row;
    }
}
console.log(website)
console.log(schemes.name)