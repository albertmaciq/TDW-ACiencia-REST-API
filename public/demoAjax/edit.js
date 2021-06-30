function loadEditForm(){
    let urlParams = new URLSearchParams(window.location.search);
    let index = urlParams.get('id');
    let type = urlParams.get('type');
    let authHeader = urlParams.get('key');
    if(type === "products")
        showProduct(index,authHeader);
    else if (type === "persons")
        showPersons(index,authHeader);
    else showEntity(index,authHeader);
}

function showProduct(id,authHeader){
    $.ajax({
        type: "GET",
        url: '/api/v1/products/' + id,
        headers: {"Authorization" : authHeader},
        success: function (data,textStatus,response){
            let eTag = response.getResponseHeader('Etag');
            localStorage.setItem("eTag",eTag);
            createEditProductForm(data);
        }
    })
}

function showPersons(id,authHeader){
    $.ajax({
        type: "GET",
        url: '/api/v1/persons/' + id,
        headers: {"Authorization" : authHeader},
        success: function (data,textStatus,response){
            let eTag = response.getResponseHeader('Etag');
            localStorage.setItem("eTag",eTag);
            createEditPersonForm(data);
        }
    })
}

function showEntity(id,authHeader){
    $.ajax({
        type: "GET",
        url: '/api/v1/entities/' + id,
        headers: {"Authorization" : authHeader},
        success: function (data,textStatus,response){
            let eTag = response.getResponseHeader('Etag');
            localStorage.setItem("eTag",eTag);
            createEditEntityForm(data);
        }
    })
}

function createEditProductForm(data){

    let editProductForm = [];

    editProductForm.push("<div class='container mx-auto text-center'>");
    editProductForm.push("<form id='form-edit-product' method='post'>");
    editProductForm.push("<img class='img-fluid' src='"+ data.product.imageUrl + "' alt='Product image'>");
    editProductForm.push("<h4>" + data.product.name + "</h4>");
    editProductForm .push("<label for='edit-product-name' class='col-form-label'>Nombre producto:</label>");
    editProductForm .push("<input id='edit-product-name' type='text' class='form-control' value='" + data.product.name + "'>");
    editProductForm .push("<label for='edit-product-birthDate' class='col-form-label'>Fecha de nacimiento:</label>");
    editProductForm .push("<input id='edit-product-birthDate' type='text' class='form-control' value='" + data.product.birthDate + "'>");
    editProductForm .push("<label for='edit-product-deathDate' class='col-form-label'>Fecha de fallecimiento:</label>");
    if(data.product.deathDate != null)
        editProductForm .push("<input id='edit-product-deathDate' type='text' class='form-control' value='" + data.product.deathDate + "'>");
    else
        editProductForm .push("<input id='edit-product-deathDate' type='text' class='form-control' value=''>");
    editProductForm .push("<label for='edit-product-imageUrl' class='col-form-label'>Imagen:</label>");
    editProductForm .push("<input id='edit-product-imageUrl' type='text' class='form-control' value='" + data.product.imageUrl + "'>");
    editProductForm .push("<label for='edit-product-wikiUrl' class='col-form-label'>Wiki:</label>");
    editProductForm .push("<input id='edit-product-wikiUrl' type='text' class='form-control' value='" + data.product.wikiUrl + "'>");
    editProductForm .push("<br/>")
    editProductForm .push("<button id='btn-save-edit-product' type='button' class='btn btn-success' onclick='saveProductChanges(" + data.product.id + ")'>Guardar cambios</button>");

    editProductForm .push("</form>");
    editProductForm .push("</div>");
    editProductForm .push("</div>");

    document.getElementById("content").innerHTML = editProductForm .join("");
}

function createEditPersonForm(data){

    let editPersonForm = [];

    editPersonForm.push("<div class='container mx-auto text-center'>");
    editPersonForm.push("<form id='form-edit-person' method='post'>");
    editPersonForm.push("<img class='img-fluid' src='"+ data.person.imageUrl + "' alt='Person image'>");
    editPersonForm.push("<h4>" + data.person.name + "</h4>");
    editPersonForm.push("<label for='edit-person-name' class='col-form-label'>Nombre persona:</label>");
    editPersonForm.push("<input id='edit-person-name' type='text' class='form-control' value='" + data.person.name + "'>");
    editPersonForm.push("<label for='edit-person-birthDate' class='col-form-label'>Fecha de nacimiento:</label>");
    editPersonForm.push("<input id='edit-person-birthDate' type='text' class='form-control' value='" + data.person.birthDate + "'>");
    editPersonForm.push("<label for='edit-person-deathDate' class='col-form-label'>Fecha de fallecimiento:</label>");
    if(data.person.deathDate != null)
        editPersonForm.push("<input id='edit-person-deathDate' type='text' class='form-control' value='" + data.person.deathDate + "'>");
    else
        editPersonForm.push("<input id='edit-person-deathDate' type='text' class='form-control' value=''>");
    editPersonForm.push("<label for='edit-person-imageUrl' class='col-form-label'>Imagen:</label>");
    editPersonForm.push("<input id='edit-person-imageUrl' type='text' class='form-control' value='" + data.person.imageUrl + "'>");
    editPersonForm.push("<label for='edit-person-wikiUrl' class='col-form-label'>Wiki:</label>");
    editPersonForm.push("<input id='edit-person-wikiUrl' type='text' class='form-control' value='" + data.person.wikiUrl + "'>");
    editPersonForm.push("<br/>")
    editPersonForm.push("<button id='btn-save-edit-person' type='button' class='btn btn-success' onclick='savePersonChanges(" + data.person.id + ")'>Guardar cambios</button>");

    editPersonForm.push("</form>");
    editPersonForm.push("</div>");
    editPersonForm.push("</div>");

    document.getElementById("content").innerHTML = editPersonForm.join("");
}

function createEditEntityForm(data){
    let editEntityForm = [];

    editEntityForm.push("<div class='container mx-auto text-center'>");
    editEntityForm.push("<form id='form-edit-entity' method='post'>");
    editEntityForm.push("<img class='img-fluid' src='"+ data.entity.imageUrl + "' alt='Entity image'>");
    editEntityForm.push("<h4>" + data.entity.name + "</h4>");
    editEntityForm.push("<label for='edit-entity-name' class='col-form-label'>Nombre entidad:</label>");
    editEntityForm.push("<input id='edit-entity-name' type='text' class='form-control' value='" + data.entity.name + "'>");
    editEntityForm.push("<label for='edit-entity-birthDate' class='col-form-label'>Fecha de nacimiento:</label>");
    editEntityForm.push("<input id='edit-entity-birthDate' type='text' class='form-control' value='" + data.entity.birthDate + "'>");
    editEntityForm.push("<label for='edit-entity-deathDate' class='col-form-label'>Fecha de fallecimiento:</label>");
    if(data.entity.deathDate != null)
        editEntityForm.push("<input id='edit-entity-deathDate' type='text' class='form-control' value='" + data.entity.deathDate + "'>");
    else
        editEntityForm.push("<input id='edit-entity-deathDate' type='text' class='form-control' value=''>");
    editEntityForm.push("<label for='edit-entity-imageUrl' class='col-form-label'>Imagen:</label>");
    editEntityForm.push("<input id='edit-entity-imageUrl' type='text' class='form-control' value='" + data.entity.imageUrl + "'>");
    editEntityForm.push("<label for='edit-entity-wikiUrl' class='col-form-label'>Wiki:</label>");
    editEntityForm.push("<input id='edit-entity-wikiUrl' type='text' class='form-control' value='" + data.entity.wikiUrl + "'>");
    editEntityForm.push("<br/>")
    editEntityForm.push("<button id='btn-save-edit-entity' type='button' class='btn btn-success' onclick='saveEntityChanges(" + data.entity.id + ")'>Guardar cambios</button>");

    editEntityForm.push("</form>");
    editEntityForm.push("</div>");
    editEntityForm.push("</div>");

    document.getElementById("content").innerHTML = editEntityForm.join("");
}

function saveProductChanges(id){

    let urlParams = new URLSearchParams(window.location.search);
    let authHeader = urlParams.get('key');

    $.ajax({
        type: "PUT",
        url: '/api/v1/products/' + id,
        headers:{"Authorization" : authHeader, "If-Match": localStorage.getItem("eTag")},
        dataType: 'json',
        data: {
            name: $("#edit-product-name").val(),
            birthDate: $("#edit-product-birthDate").val(),
            deathDate: $("#edit-product-deathDate").val(),
            imageUrl: $("#edit-product-imageUrl").val(),
            wikiUrl:$("#edit-product-wikiUrl").val()
        },
        success:function(data){
            console.log(data);
            window.close();
            alert("Se han guardado los cambios");
        }
    })
}

function savePersonChanges(id){

    let urlParams = new URLSearchParams(window.location.search);
    let authHeader = urlParams.get('key');

    $.ajax({
        type: "PUT",
        url: '/api/v1/persons/' + id,
        headers:{"Authorization" : authHeader, "If-Match": localStorage.getItem("eTag")},
        dataType: 'json',
        data: {
            name: $("#edit-person-name").val(),
            birthDate: $("#edit-person-birthDate").val(),
            deathDate: $("#edit-person-deathDate").val(),
            imageUrl: $("#edit-person-imageUrl").val(),
            wikiUrl:$("#edit-person-wikiUrl").val(),
        },
        success:function(data){
            console.log(data);
            window.close();
            alert("Se han guardado los cambios correctamente");
        }
    })
}

function saveEntityChanges(id){

    let urlParams = new URLSearchParams(window.location.search);
    let authHeader = urlParams.get('key');

    $.ajax({
        type: "PUT",
        url: '/api/v1/entities/' + id,
        headers:{"Authorization" : authHeader, "If-Match": localStorage.getItem("eTag")},
        dataType: 'json',
        data: {
            name: $("#edit-entity-name").val(),
            birthDate: $("#edit-entity-birthDate").val(),
            deathDate: $("#edit-entity-deathDate").val(),
            imageUrl: $("#edit-entity-imageUrl").val(),
            wikiUrl:$("#edit-entity-wikiUrl").val(),
        },
        success:function(data){
            console.log(data);
            window.close();
            alert("Se han guardado los cambios correctamente");
        }
    })
}