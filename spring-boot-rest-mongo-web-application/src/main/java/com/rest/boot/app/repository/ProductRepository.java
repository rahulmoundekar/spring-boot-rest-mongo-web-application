package com.rest.boot.app.repository;


import com.rest.boot.app.bean.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, String> {

}
