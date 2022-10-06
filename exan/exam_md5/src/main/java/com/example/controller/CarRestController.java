package com.example.controller;

import com.example.model.Car;
import com.example.projection.ICarProjection;
import com.example.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("rest/cars")
public class CarRestController {
    @Autowired
    private ICarService iCarService;

    @GetMapping("")
    public ResponseEntity<Page<ICarProjection>> showCars(@PageableDefault(size = 1) Pageable pageable) {
        Page<ICarProjection> cars = iCarService.getCars(pageable);
        if (cars.hasContent()) {
            return new ResponseEntity<>(cars, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("{id}")
    public ResponseEntity<Car> showCar(@PathVariable Integer id) {
        Car car = iCarService.getCarById(id);
        if (car != null) {
            return new ResponseEntity<>(car, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Integer id) {
        iCarService.deleteCarById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> updateCar(@PathVariable Integer id, @RequestBody Car car) {
        iCarService.saveCar(car);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
