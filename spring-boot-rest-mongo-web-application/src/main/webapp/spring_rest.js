var url = "http://localhost:8080/product/";
	$(function() {
	    productList();
	    $('button[type=submit]').click(function(e) {
	        e.preventDefault();
	        //alert($('form[name=productForm]').serialize());
	        $.post({
	            type: "POST",
	            url: url+"save",
	            data: $('form[name=productForm]').serialize(),
	            dataType: "text",
	            success: function(response) {
	                $("#success_id").show().fadeOut(5000);
	                productList();
	                $("input[type=text], textarea").val("");
	            },
	            error: function(jqXHR, textStatus, errorThrown) {
	                console.log(textStatus, errorThrown);
	                $("#error_id").show().fadeOut(5000);
	            }
	        })
	    });
	});

	function productList() {
	    var msg_data;
	    $.ajax({
	        type: "GET",
	        url: url,
	        dataType: "json",
	        success: function(response) {
	            var table = '<table id=example class=table table-striped table-bordered cellspacing=0 width=100%>' +
	                '<thead> <tr> <th>Id</th> <th>Product Name</th> <th>Quantity</th> <th>Price</th> <th>Edit</th> <th>Delete</th> </tr> </thead>' +
	                '<tfoot> <tr> <th>Id</th> <th>Product Name</th> <th>Quantity</th> <th>Price</th> <th>Edit</th> <th>Delete</th> </tr> </tfoot><tbody id="product-list">';
	            $.each(response, function(key, product) {
	                table += "<tr>" +
	                    "<td>" + product.id + "</td>" +
	                    "<td>" + product.name + "</td>" +
	                    "<td>" + product.quantity + "</td>" +
	                    "<td>" + product.price + "</td>" +
	                    "<td><a href='#' onclick='javascript:editProduct(\""+product.id.toString()+"\");'>edit</a></td>" +
	                    "<td><a href='#' onclick='javascript:deleteProduct(\"" + product.id.toString() +"\");'>delete</a></td>" +
	                    "</tr>";

	            });
	            table += '</table>';
	            $("#tableContainer").html(table);
	        }
	    });
	}

	function deleteProduct(id) {
	    //alert(id);
	    $.ajax({
	        type: "DELETE",
	        url: url + id,
	        dataType: "text",
	        success: function(response) {
	            $("#success_id").show().fadeOut(5000);
	            productList();
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	            $("#error_id").show().fadeOut(5000);
	            console.log(textStatus, errorThrown);
	        }
	    })
	}

	function editProduct(id) {
	    $.ajax({
	        type: "GET",
	        url: url + id,
	        dataType: "json",
	        success: function(response) {
	            $("#idInput").html("<input id='id' name='id' type='hidden' class='form-control input-md' value=" + response.id + ">")
	            $("#name").val(response.name);
	            $("#quantity").val(response.quantity);
	            $("#price").val(response.price);
	            productList();
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	            console.log(textStatus, errorThrown);
	        }
	    })
	}