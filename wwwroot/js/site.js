// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.




function GetData(url) {
    return fetch(url)
        .then(response => response.json());
}

function ShowResourceModal(data) {
    $('#exampleModalLabel').empty();
    $('#exampleModalLabel').append(`Select Interested Service.  اختر عرض من العروض التالية`);
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
    $('#exampleModalLabel').append(`When do you want to apply for ${s}.  متى ترغب في رفع الطلب ؟`);
    let Content = ``;
 
    Content = Content + `<button type="button" class="btn col-4 btn-outline-primary">During One Week  خلال اسبوع</button><button type="button" class="btn col-4 btn-outline-secondary">During 1 Month خلال شهر </button><button type="button" class="btn btn-outline-success col-4">General Inquiry استفسار عام</button>`;
    
    $('#modelBody').empty();
    $('#modelBody').append(Content);
    $('#exampleModal').modal();
}