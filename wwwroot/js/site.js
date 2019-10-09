// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.




function GetData(url) {
    return fetch(url)
        .then(response => response.json());
}

function ShowResourceModal(data) {
    $('#exampleModalLabel').empty();
    $('#exampleModalLabel').append(`Select Interested Service. `);
    let Content = ``;
    for (const service of data) {
        Content = Content + `<button type="button" onclick="ShowSecondModel('${service.name}')"  class="btn m-2 btn-outline-primary">${service.name}</button>`;
    }
    $('#modelBody').empty();
    $('#modelBody').append(Content);
    $('#exampleModal').modal();
    
}
function ShowFirstModel() {
    GetData(`/api/Services`).then(response => ShowResourceModal(response));
}
function ShowSecondModel(s) {
    $('#exampleModalLabel').empty();
    $('#exampleModalLabel').append(`When do you want to apply for ${s}. `);
    let Content = ``;

    Content = Content + `<button type="button" class="btn col-12 btn-outline-primary m-1 " onclick="sendEmail('${s}','One Week')">During One Week </button><button type="button" class="btn m-1 col-12 btn-outline-secondary" onclick="sendEmail('${s}','One Month')">During 1 Month </button><button type="button" class="btn btn-outline-success m-1 col-12" onclick="sendEmail('${s}','General')">General Inquiry </button>`;
    
    $('#modelBody').empty();
    $('#modelBody').append(Content);
    $('#exampleModal').modal();
}

function sendEmail(service, duration) {
    let name = document.getElementById("Name").value;
    let phone = document.getElementById("Phone").value;
    let email = document.getElementById("Email").value;
    let url = `https://voltaic-dance.glitch.me/send?service=${service}&duration=${duration}&email=${email}&name=${name}&phone=${phone}`;
    console.log(url);
    fetch(url).then(alert("email sent"));

}