package com.example.service;

import com.example.model.Car;
import com.example.projection.ICarProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICarService {
    Page<ICarProjection> getCars(Pageable pageable);

    Car getCarById(Integer id);

    void deleteCarById(Integer id);

    void saveCar(Car car);
}
