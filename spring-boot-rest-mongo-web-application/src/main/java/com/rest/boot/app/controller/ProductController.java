package com.rest.boot.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rest.boot.app.bean.Product;
import com.rest.boot.app.repository.ProductRepository;

@RestController
public class ProductController {

	@Autowired
	ProductRepository productRepository;

	@RequestMapping("/")
	public String viewHome() {
		return "index";
	}

	/*---Add new product---*/
	@PostMapping(value = "/product/save", produces = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	public ResponseEntity<?> save(@ModelAttribute Product product, BindingResult result) {
		Product product2 = productRepository.save(product);
		return ResponseEntity.ok().body("New product has been saved with ID:" + product2);
	}

	/*---Get a product by id---*/
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> get(@PathVariable("id") String id) {
		System.out.println(id);
		Product product = productRepository.findOne(id);
		return ResponseEntity.ok().body(product);
	}

	/*---get all products---*/
	@GetMapping("/product/")
	@ResponseBody
	public ResponseEntity<Iterable<Product>> list() {
		Iterable<Product> products = productRepository.findAll();
		return ResponseEntity.ok().body(products);
	}

	/*---Delete a product by id---*/
	@DeleteMapping("/product/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
		System.out.println(id);
		productRepository.delete(id);
		return ResponseEntity.ok().body("product has been deleted successfully.");
	}
}
